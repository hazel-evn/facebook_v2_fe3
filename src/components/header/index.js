import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import {
  ArrowDown,
  Friends,
  Gaming,
  HomeActive,
  Logo,
  Market,
  Menu,
  Messenger,
  Notifications,
  Search,
  Watch,
} from "../../svg";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((user) => ({ ...user }));
  console.log(user);
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
      <div className="header_right">
        <Link to="/profile" className="profile_link hover1">
          <img src={user?.picture} />
          <span>{user?.first_name}</span>
        </Link>
        <div className="circle_icon">
          <Menu />
        </div>
        <div className="circle_icon">
          <Messenger />
        </div>
        <div className="circle_icon">
          <Notifications />
          <div className="right_notification">5</div>
        </div>
        <div className="circle_icon">
          <ArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Header;
