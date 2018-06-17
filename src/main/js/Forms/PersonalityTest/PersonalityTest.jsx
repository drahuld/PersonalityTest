import React, {Component} from "react";

export default class PersonalityTest extends Component {

    /**
     * Constructor for PersonalityTest
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
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