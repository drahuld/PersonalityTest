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
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/home/personalityTest">Personality Test</Link></li>
            </ul>
        </div>
    );
};
export default Navigation;