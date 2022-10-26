import React from "react";
import "./style.css";
import { Dots, NewRoom, Search } from "../../../svg";
import Contact from "./contact";
const HomeRight = ({ user }) => {
  return (
    <div className="right_home">
      <div className="heading">Được tài trợ</div>
      <div className="splitter1"></div>
      <div className="contacts_wrap">
        <div className="contacts_header">
          <div className="contacts_header_left">Người liên hệ</div>
          <div className="contacts_header_right">
            <div className="contact_circle hover1">
              <NewRoom />
            </div>
            <div className="contact_circle hover1">
              <Search />
            </div>
            <div className="contact_circle hover1">
              <Dots />
            </div>
          </div>
        </div>
        <div className="contacts_list">
          <Contact user={user} />
          <Contact user={user} />
          <Contact user={user} />
          <Contact user={user} />
          <Contact user={user} />
          <Contact user={user} />
          <Contact user={user} />
          <Contact user={user} />
          <Contact user={user} />
        </div>
      </div>
    </div>
  );
};

export default HomeRight;
