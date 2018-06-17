import React from "react";
import "./PersonalityTest.scss"
import * as APPLICATION_CONSTANTS from "../../Constants/ApplicationConstants.jsx";
import ShowQuestions from "./ShowQuestions.jsx";

/**
 * Component is a child component of Personality Test Component.
 *
 * This component again wraps another child components.
 *
 * @param props
 * @constructor
 */
const CategoryQuestions = (props) => {

    /**
     * Handler call back method which takes the value from child and pass it to the parent.
     *
     * @param event
     * @param userName
     * @param questionId
     */
    const handleOptionChangeCallBack = (event, userName, questionId) => {
        props.handleOptionChangeCallBack(event, userName, questionId);
    }

    /**
     * Handler method to handle on click event of when user click on Group details.
     *
     * @param categoryName
     */
    const onClickOfGroupDetails = (categoryName) => {
        if (categoryName !== null && categoryName !== '' && categoryName !== null) {
            console.log("Inside If condition ");

        }
    };

    /**
     * This is a sub component and its shows all the available categories.
     *
     * @param props
     * @constructor
     */
    const ShowCategory = (props) => {
        if (props.categoryList !== undefined && props.categoryList !== null) {
            return (
                Object.entries(props.categoryList).map(([key, value]) => {
                    return (
                        <div key={key} className="questionOuterDivCss">
                            <details open={value.isQuestionPanelExpanded}>
                                <summary
                                    onClick={() => onClickOfGroupDetails(value.categoryName)}>{APPLICATION_CONSTANTS.QUESTION_TYPE_STR} :
                                    ({value.categoryName})
                                </summary>
                                <div className="questionDetailsDivCss">

                                    <ShowQuestions selectedAnswersList={props.selectedAnswersList}
                                                   categoryTypeQuestionList={value.listOfQuestions}
                                                   categoryTypeKey={value.categoryName}
                                                   handleOptionChangeCallBack={handleOptionChangeCallBack}/>

                                </div>
                            </details>
                        </div>
                    );
                })
            );
        }
    };

    return (<div className="mainBodyCss">

        <ShowCategory selectedAnswersList={props.selectedAnswersList} categoryList={props.categoryList}/>

    </div>);

};

export default CategoryQuestions;