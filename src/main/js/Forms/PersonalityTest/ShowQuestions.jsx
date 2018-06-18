import React from "react";
import * as APPLICATION_CONSTANTS from "../../Constants/ApplicationConstants.jsx";
import PropTypes from "prop-types";
/**
 * Component to show Questions and Radio button options.
 *
 * @param props
 * @constructor
 */
const ShowQuestions = (props) => {

    /**
     * Handler call back method to send selected data to parent component for state update.
     *
     * @param changeEvent
     * @param questionId
     */
    const handleOptionChange = (changeEvent, questionId) => {
        //changeEvent.preventDefault();
        props.handleOptionChangeCallBack(changeEvent.target.value, APPLICATION_CONSTANTS.APPLICATION_USER_NAME, questionId);
    };

    /**
     * This is a component which rendered question and its options.
     *
     * @param props
     * @returns {null}
     * @constructor
     */
    const RadioGroupOptionComponent = (props) => {
        if (props.questionType.type === 'single_choice') {
            return (
                Object.entries(props.questionType.options).map(([key, value]) => {
                    let objectIndex = (props.selectedAnswersList).findIndex((obj => {
                        return (obj.userName === APPLICATION_CONSTANTS.APPLICATION_USER_NAME && obj.questionId === props.questionId)
                    }));

                    let alreadySelectedValue = '';

                    if (objectIndex > -1) {
                        alreadySelectedValue = (props.selectedAnswersList)[objectIndex].selectedValue;
                    }

                    return (
                        <div key={key}>
                            <div className="optionDivFlex">
                                <div>
                                    <input
                                        type="radio"
                                        name={props.questionId}
                                        value={value}
                                        checked={alreadySelectedValue === value}
                                        onChange={(event) => handleOptionChange(event, props.questionId)}/>
                                </div>
                                <div>{value}</div>
                            </div>
                        </div>
                    );
                })
            );
        }
        ;
        return null;
    };

    return (
        Object.entries(props.categoryTypeQuestionList).map(([arrayCategoryKey, categoryQuestionsObject]) => {
            let questionNumber = (+arrayCategoryKey) + (+1);
            return (
                <div key={categoryQuestionsObject.id} className="questionMainDivGrid">
                    <div className="questionDivGridElement">Que {questionNumber}:</div>
                    <div className="questionDivGridElement">{categoryQuestionsObject.question}</div>
                    <div></div>
                    <div className="questionDivGridElement"><RadioGroupOptionComponent
                        selectedAnswersList={props.selectedAnswersList}
                        questionId={categoryQuestionsObject.id}
                        questionType={categoryQuestionsObject.questionType}/></div>
                </div>
            );
        })
    );
};


ShowQuestions.propTypes = {
    selectedAnswersList: PropTypes.array.isRequired,
    categoryTypeQuestionList: PropTypes.array.isRequired,
    categoryTypeKey: PropTypes.string.isRequired,
    handleOptionChangeCallBack: PropTypes.func.isRequired,
};

export default ShowQuestions;