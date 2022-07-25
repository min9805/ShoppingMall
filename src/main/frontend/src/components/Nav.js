import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";
import "../styles/common/Nav.css";

const Nav = () => {
  return (
    <div>
      <nav class="nav1">
        <div>
          <NavLink to="/">Home</NavLink>
        </div>
        <div>
          <NavLink to="/search">Search</NavLink>
        </div>
        <div>
          <NavLink to="/mypage">MyPage</NavLink>
        </div>
        <div>
          <NavLink to="/mypage">Login</NavLink>
        </div>
      </nav>
      <nav class="nav2">
        <Dropdown text="menu1">
          <Dropdown.Menu>
            <Dropdown.Item>
              <NavLink to="/">menu1-11</NavLink>
            </Dropdown.Item>
            <Dropdown.Item text="menu1-2" />
            <Dropdown.Item text="menu1-3" />
          </Dropdown.Menu>
        </Dropdown>
        <div>
          <NavLink to="/">menu1</NavLink>
        </div>
        <div>
          <NavLink to="/recommend">menu2</NavLink>
        </div>
        <div>
          <NavLink to="/search">menu3</NavLink>
        </div>
        <div>
          <NavLink to="/mypage">menu4</NavLink>
        </div>
        <div>
          <NavLink to="/mypage">menu5</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
