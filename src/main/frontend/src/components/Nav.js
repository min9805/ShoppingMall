import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";
import "../styles/common/Nav.css";

const Nav = () => {
  return (
    <div>
      <nav className="nav1">
        <div>
          <NavLink to="/">Home</NavLink>
        </div>
        <div>
          <NavLink to="/search">Search</NavLink>
        </div>
        <div>
          <NavLink to="/product">Product</NavLink>
        </div>
        <div>
          <NavLink to="/mypage">Login</NavLink>
        </div>
        <div>
          <NavLink to="/signup">SignUp</NavLink>
        </div>
      </nav>
      <nav className="nav2">
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
          <NavLink to="/menu">menu1</NavLink>
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
          <NavLink to="/singup">menu5</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
