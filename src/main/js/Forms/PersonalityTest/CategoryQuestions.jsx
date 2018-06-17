import React from "react";
import * as APPLICATION_CONSTANTS from "../../Constants/ApplicationConstants.jsx";

/**
 * This is a child component of Personality Test and is responsible to render
 * Category types and its questions.
 *
 * This is a stateless component.
 *
 * @param props
 * @constructor
 */
const CategoryQuestions = (props) => {

    const onClickOfGroupDetails = (categoryName) => {
        console.log("onClickOfGroupDetails ", categoryName);
    }

    const ShowCategory = (props) => {
        console.log("props.categoryList : ", props.categoryList);
        if (props.categoryList !== undefined && props.categoryList !== null) {
            return (
                Object.entries(props.categoryList).map(([key, value]) => {
                    console.log("Values :", value);
                    return (
                        <div key={key} className="questionOuterDivCss">
                            <details open={value.isQuestionPanelExpanded}>
                                <summary
                                    onClick={() => onClickOfGroupDetails(value.categoryName)}>{APPLICATION_CONSTANTS.QUESTION_TYPE_STR} :
                                    ({value.categoryName})
                                </summary>
                                <div className="questionDetailsDivCss">



                                </div>
                            </details>
                        </div>
                    );
                })
            );
        }
        ;
    };

    return (

        <ShowCategory categoryList={props.categoryList}/>
    );

};
export default CategoryQuestions;