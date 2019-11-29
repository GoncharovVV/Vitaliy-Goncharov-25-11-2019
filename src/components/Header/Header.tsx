import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.scss';
export interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="header">
      <span className="logo">Weather App</span>
      <nav className="navigation">
        <ul className="list">
          <li className="list__item">
            <NavLink className="list__link" exact={true} activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="list__link" activeClassName="active" to="/favorites">
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;