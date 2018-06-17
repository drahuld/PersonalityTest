import React, {Component} from "react";
import * as APPLICATION_CONSTANTS from "../../Constants/ApplicationConstants.jsx";
import RequestServiceApi from "../Utils/RequestServiceApi.jsx";

export default class PersonalityTest extends Component {

    /**
     * Constructor for PersonalityTest
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            isQuestionPanelExpanded: false,
            categoriesTypesArray: []
        }
    }

    /**
     * Life cycle method get calls after component get mount in DOM tree.
     *
     * This method fires a fetch api call to server and get the CategoryTypes and its questions.
     */
    componentDidMount(){
        console.log("PersonalityTest: componentDidMount START ");
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
        console.log("PersonalityTest: componentDidMount END ");
    }

    /**
     * Render method for PersonalityTest
     * @returns {*}
     */
    render() {
        return (
            <div>
                personality test
            </div>
        );
    }
}