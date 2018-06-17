import React, {Component} from "react";
import {Link} from 'react-router-dom';
import "./Navigation.scss";

/**
 * Left hand side navigational component for application.
 *
 * This is stateless component.
 *
 * @returns {*}
 * @constructor
 */
const Navigation = () => {

    return (
        <div className="navMainDiv">
            <ul>
                <li><Link to="/home"><span className="labelName">Home</span></Link></li>
                <li><Link to="/home/personalityTest"><span className="labelName">Personality Test</span></Link></li>
            </ul>
        </div>
    );
};
export default Navigation;