import React from 'react';
import FooterLayout from "../Footer/FooterLayout.jsx";
import HeaderLayout from "../Header/HeaderLayout.jsx";
import Navigation from "../Nav/Navigation.jsx";
import './MainAppLayout.scss';

/**
 * This component rendered main layout of the application.
 * It divides page in Header, left navigation, right side, footer and main content of application in the middle.
 *
 * This is stateless component.
 *
 * @returns {*}
 * @constructor
 */
const MainAppLayout = (props) => {
    return (
      <div className="mainLayoutDivGrid">
          <header><HeaderLayout /></header>
          <nav><Navigation /></nav>
          <main>
              {props.children}
          </main>
          <aside></aside>
          <footer><FooterLayout /></footer>
      </div>
    );
};
export default MainAppLayout;

