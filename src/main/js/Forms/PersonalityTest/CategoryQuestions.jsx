import React from "react";
import "./PersonalityTest.scss"
import * as APPLICATION_CONSTANTS from "../../Constants/ApplicationConstants.jsx";
import ShowQuestions from "./ShowQuestions.jsx";
import PropTypes from 'prop-types';

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
    const onClickOfGroupDetails = (event, categoryId) => {
        event.preventDefault();
        if (categoryId !== null && categoryId !== '' && categoryId !== null) {
            props.onClickOfCategoryTypeCallBack(event, categoryId);
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
                                    onClick={(event) => onClickOfGroupDetails(event, value.id)}>{APPLICATION_CONSTANTS.QUESTION_TYPE_STR} :
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
        return null;
    };

    return (<div className="mainBodyCss">

        <ShowCategory selectedAnswersList={props.selectedAnswersList} categoryList={props.categoryList}/>

    </div>);

};

CategoryQuestions.propTypes = {
    categoryList: PropTypes.array.isRequired,
    selectedAnswersList: PropTypes.array.isRequired,
    onClickOfCategoryTypeCallBack: PropTypes.func.isRequired,
    handleOptionChangeCallBack: PropTypes.func.isRequired,
};
export default CategoryQuestions;