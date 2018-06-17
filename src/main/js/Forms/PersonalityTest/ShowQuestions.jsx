import React from "react";

const ShowQuestions = (props) => {

    const RadioGroupOptionComponent = (props) => {
        return(<div>radio option</div>);
    };

    return (
        Object.entries(props.categoryTypeQuestionList).map(([arrayCategoryKey, categoryQuestionsObject]) => {
            let questionNumber = (+arrayCategoryKey) + (+1);
            return (
                <div key={categoryQuestionsObject.id}>
                    <div>Que {questionNumber}:</div>
                    <div>{categoryQuestionsObject.question}</div>
                    <div></div>
                    <div>
                        <RadioGroupOptionComponent questionId={categoryQuestionsObject.id}
                                                   questionType={categoryQuestionsObject.questionType}/>
                    </div>
                </div>
            );
        })
    );
};

export default ShowQuestions;