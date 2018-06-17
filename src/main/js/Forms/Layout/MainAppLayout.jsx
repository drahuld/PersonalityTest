import React from 'react';
import FooterLayout from "../Footer/FooterLayout.jsx";
import HeaderLayout from "../Header/HeaderLayout.jsx";
import './MainAppLayout.scss';

const MainAppLayout = (props) => {
    return (
      <div className="mainLayoutDivGrid">
          <header><HeaderLayout /></header>
          <nav>Navigation</nav>
          <main>
              {props.children}
          </main>
          <aside></aside>
          <footer><FooterLayout /></footer>
      </div>
    );
};
export default MainAppLayout;

