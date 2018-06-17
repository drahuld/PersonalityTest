import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./Forms/Home/Home.jsx";
import "./App.scss";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="mainAppDiv">

            <Switch>
                <Route exact={true} path="/" render={() => <Home/>} />
                <Route exact={true} path="/home" render={() => <Home/>} />
            </Switch>

        </div>);
    }
}