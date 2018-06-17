import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./Forms/Home/Home.jsx";
import MainAppLayout from "./Forms/Layout/MainAppLayout.jsx";
import "./App.scss";
import PersonalityTest from "./Forms/PersonalityTest/PersonalityTest.jsx";
import SuccessPage from "./Forms/Utils/SuccessPage.jsx";
import ErrorPage from "./Forms/Utils/ErrorPage.jsx";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="mainAppDiv">

            <Switch>
                <Route exact={true} path="/" render={() => <MainAppLayout> <Home/> </MainAppLayout>} />
                <Route exact={true} path="/home" render={() => <MainAppLayout> <Home/> </MainAppLayout>} />
                <Route exact={true} path="/home/personalityTest" render={() => <MainAppLayout> <PersonalityTest /> </MainAppLayout>} />
                <Route exact={true} path="/success" render={ () => <MainAppLayout> <SuccessPage/> </MainAppLayout> } />
                <Route exact={true} path="/error" render={ () => <MainAppLayout> <ErrorPage/> </MainAppLayout> } />
            </Switch>

        </div>);
    }
};