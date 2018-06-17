import React, {Component} from "react";
import {Link} from 'react-router-dom';
import "./Navigation.scss";

const Navigation = () => {

    return(
        <div className="navMainDiv">
            <ul>
                <li>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/home/personalityTest">Personality Test</Link></li>
                </li>
            </ul>
        </div>
    );
};
export default Navigation;