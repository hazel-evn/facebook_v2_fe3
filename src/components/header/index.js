import React, { useRef, useState } from "react";
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
import SearchMenu from "./searchMenu";
import AllMenu from "./allMenu";
import ClickOutside from "../../helpers/clickOutside";
import UserMenu from "./userMenu";

const Header = () => {
  const { user } = useSelector((user) => ({ ...user }));
  console.log(user);
  const [showSearchMenu, setShowSearchMenu] = useState(false);
  const [showAllMenu, setshowAllMenu] = useState(false);
  const [showUserMenu, setshowUserMenu] = useState(false);
  const allmenu = useRef(null);
  const userMenu = useRef(null);
  ClickOutside(allmenu, () => {
    setshowAllMenu(false);
  });
  ClickOutside(userMenu, () => {
    setshowUserMenu(false);
  });
  return (
    <div className="header">
      <div className="header_left">
        <Link href="" className="header_logo">
          <div className="circle">
            <Logo />
          </div>
        </Link>
        <div className="search search1" onClick={() => setShowSearchMenu(true)}>
          <Search />
          <input
            type="text"
            placeholder="Tìm kiếm trên Facebook"
            className="hide_input"
          />
        </div>
      </div>
      {showSearchMenu && <SearchMenu setShowSearchMenu={setShowSearchMenu} />}
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
          <img src={user?.picture} alt="" />
          <span>{user?.first_name}</span>
          <span>{user?.last_name}</span>
        </Link>
        <div
          className={`circle_icon hover1 ${showAllMenu && "active_header"}`}
          ref={allmenu}
        >
          <div
            onClick={() => {
              setshowAllMenu((prev) => !prev);
            }}
          >
            <Menu />
          </div>
          {showAllMenu && <AllMenu />}
        </div>
        <div className="circle_icon hover1">
          <Messenger />
        </div>
        <div className="circle_icon hover1">
          <Notifications />
          <div className="right_notification">5</div>
        </div>
        <div
          className={`circle_icon hover1 ${showUserMenu && "active_header"}`}
          ref={userMenu}
        >
          <div onClick={() => setshowUserMenu((prev) => !prev)}>
            <ArrowDown />
          </div>

          {showUserMenu && <UserMenu user={user} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
