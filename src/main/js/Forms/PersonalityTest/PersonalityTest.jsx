import React, {Component} from "react";
import * as APPLICATION_CONSTANTS from "../../Constants/ApplicationConstants.jsx";
import CategoryQuestions from "./CategoryQuestions.jsx";
import RequestServiceApi from "../Utils/RequestServiceApi.jsx";
import {withRouter} from "react-router";

/**
 * Top level Parent Component for Personality Test.
 *
 * This is stateful component and responsible for handling state of this functionality.
 * It also handle state of its child component and update its state by using call back methods and
 * pass it down through props.
 *
 * @returns {*}
 * @constructor
 */
class PersonalityTest extends Component {

    /**
     * Constructor for PersonalityTest
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            /**
             * 0: {id: "5b2039c50c3946bac7eeb3db", categoryName: "hard_fact", isQuestionPanelExpanded: true}
             */
            categoriesTypesArray: [],

            /**
             * Controls the expand and collapse
             */
            isQuestionPanelExpanded: false,
            /**
             * [
             * 0:{hard_fact: Array(5)}
             * 1:{passion: Array(5)}
             * 2:{lifestyle: Array(9)}
             * 2:{lifestyle: Array(9)}
             * ]
             */
            categoryTypeQuestionList: [],
            /**
             * {id: 123, userName: "SparkNetwork", questionId: "234234", selectedValue: "male"}
             */
            selectedAnswersForCategoriesQuestion: []
        }
    };

    /**
     * Handler call when user click on Category type to collapse and expand.
     *
     * @param categoryId
     */
    onClickOfCategoryType = (event, categoryId) => {
        if (this.state.categoriesTypesArray !== null && (this.state.categoriesTypesArray).length > 0) {
            let objectIndex = (this.state.categoriesTypesArray).findIndex((obj => (obj.id === categoryId)));
            if (objectIndex > -1) {
                let existingValue = (this.state.categoriesTypesArray)[objectIndex].isQuestionPanelExpanded;
                if (existingValue !== null) {
                    let updatedObjectArray = (this.state.categoriesTypesArray)
                        .map(element => (element.id === categoryId) ?
                            {...element, isQuestionPanelExpanded: !existingValue} : element);
                    this.setState({
                        categoriesTypesArray: updatedObjectArray
                    });
                }
            }
        }
    };

    /**
     * Handler method for submit button event.
     * When user click on Submit button to submit answered questions.
     *
     * @param event
     */
    onClickOfSubmitButton = (event) => {
        event.preventDefault();

        let saveObject = {userAnswersArray: this.state.selectedAnswersForCategoriesQuestion};
        let response = RequestServiceApi.fetchSendObject(APPLICATION_CONSTANTS.PERSONALITY_TEST_GET_ALL_CATEGORY_LIST_API, saveObject);
        response.then(data => {
            if (data) {
                this.props.history.push('/success');
            } else {
                console.log("Response has Error");
                this.props.history.push('/error');
            }
        });
    }

    /**
     * Handler method call when user selected the radio button or change the radio button.
     *
     * @param selectedValue
     * @param userName
     * @param questionId
     */
    handleOptionChange = (selectedValue, userName, questionId) => {

        let newObject = {'userName': userName, 'questionId': questionId, 'selectedValue': selectedValue};
        let objectIndex = (this.state.selectedAnswersForCategoriesQuestion).findIndex((obj => (obj.userName === userName && obj.questionId === questionId)));

        if (objectIndex === -1) {
            this.setState({
                selectedAnswersForCategoriesQuestion: [...this.state.selectedAnswersForCategoriesQuestion, newObject]
            });
        } else {
            //let existingObject = (this.state.selectedAnswersForCategoriesQuestion)[objectIndex];

            let updatedObjectArray = (this.state.selectedAnswersForCategoriesQuestion)
                .map(element => (element.userName === userName && element.questionId === questionId) ?
                    {...element, selectedValue: selectedValue} : element);
            this.setState({
                selectedAnswersForCategoriesQuestion: updatedObjectArray
            });
        }


    };

    /**
     * Life cycle method get calls after component get mount in DOM tree.
     *
     * This method fires a fetch api call to server and get the CategoryTypes and its questions.
     */
    componentDidMount() {
        let response = RequestServiceApi.getRequest(APPLICATION_CONSTANTS.PERSONALITY_TEST_GET_ALL_CATEGORY_LIST_API);
        response.then(data => {
            if (data !== undefined && data !== null && Object.keys(data).length > 0) {
                let categoryArray = [];
                Object.entries(data).map(([key, value]) => {
                    categoryArray[key] = {...value, isQuestionPanelExpanded: this.state.isQuestionPanelExpanded};
                });
                this.setState({
                    categoriesTypesArray: categoryArray
                });
            }
        });
    }

    /**
     * This method rendered Personality Test component.
     *
     * @returns {*}
     */
    render() {
        return (

            <form onSubmit={this.onClickOfSubmitButton}>
                <div className="personalityTestMainDivCss">

                    <CategoryQuestions onClickOfCategoryTypeCallBack={this.onClickOfCategoryType}
                                       handleOptionChangeCallBack={this.handleOptionChange}
                                       categoryList={this.state.categoriesTypesArray}
                                       selectedAnswersList={this.state.selectedAnswersForCategoriesQuestion}/>

                    <button className="button buttonBar"><span>Submit </span></button>

                </div>

            </form>
        );
    }
}

export default withRouter(PersonalityTest);