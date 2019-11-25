import * as React from 'react';
import { NavLink } from "react-router-dom";
import './Header.scss';
export interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      logo
      <nav>
        <ul>
          <li>
            <NavLink exact={true} activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites">
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;