import * as React from 'react';
import { NavLink } from "react-router-dom";
import './Header.scss';
export interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="header">
      logo
      <nav className="navigation">
        <ul className="list">
          <li className="list__item">
            <NavLink className="list__link" exact={true} activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="list__link" to="/favorites">
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;