import React, {Component} from "react";
import "./Home.scss";
/**
 * Home page component for showing Home page.
 * This will get call on click of Home link from left hand navigation.
 *
 * This is stateless component.
 *
 * @returns {*}
 * @constructor
 */
const Home = () => {
    return (
        <div className="homeMainDiv">
            Welcome to Personality Test !!!
        </div>
    );
};
export default Home;