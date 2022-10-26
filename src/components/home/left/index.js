import React from "react";
import LeftLink from "./leftLink";
import "./style.css";
import { left } from "../../../data/home";
import { Link } from "react-router-dom";

const LeftHonme = ({ user }) => {
  return (
    <div className="left_home">
      <Link to="/profile" className="left_link hover1">
        <img src={user?.user.picture} alt="" />
        <span>
          {user?.user.first_name} {user?.user.last_name}
        </span>
      </Link>
      {left.slice(0, 8).map((link, i) => (
        <LeftLink
          key={i}
          img={link.img}
          text={link.text}
          notification={link.notification}
        />
      ))}
    </div>
  );
};

export default LeftHonme;
