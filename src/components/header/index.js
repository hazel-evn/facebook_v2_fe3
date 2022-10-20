import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import {
  Friends,
  Gaming,
  HomeActive,
  Logo,
  Market,
  Search,
  Watch,
} from "../../svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <Link href="" className="header_logo">
          <div className="circle">
            <Logo />
          </div>
        </Link>
        <div className="search searchi">
          <Search />
          <input
            type="text"
            placeholder="Tìm kiếm trên Facebook"
            className="hide_input"
          />
        </div>
      </div>
      <div className="header_middle">
        <Link to="/" className="middle_icon active">
          <HomeActive />
        </Link>
        <Link to="/" className="middle_icon hover1">
          <Friends />
        </Link>
        <Link to="/" className="middle_icon hover1">
          <Watch />
          <div className="middle_notification">9+</div>
        </Link>
        <Link to="/" className="middle_icon hover1">
          <Market />
        </Link>
        <Link to="/" className="middle_icon hover1">
          <Gaming />
        </Link>
      </div>
      <div className="header_right"></div>
    </div>
  );
};

export default Header;
