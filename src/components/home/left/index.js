import React, { useState } from "react";
import LeftLink from "./leftLink";
import "./style.css";
import { left } from "../../../data/home";
import { Link } from "react-router-dom";
import { ArrowDown1 } from "../../../svg";
import Shortcut from "./shortcut";

const LeftHonme = ({ user }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="left_home scrollbar">
      <Link to={`/profile/${user?.username}`} className="left_link hover1">
        <img src={user?.picture} alt="" />
        <span>
          {user?.first_name} {user?.last_name}
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
      {!visible && (
        <div className="left_link hover1" onClick={() => setVisible(true)}>
          <div className="small_circle">
            <ArrowDown1 />
          </div>
          <span>Xem thêm</span>
        </div>
      )}
      {visible && (
        <div className="more_left" onClick={() => setVisible(false)}>
          {left.slice(8, left.length).map((link, i) => (
            <LeftLink
              key={i}
              img={link.img}
              text={link.text}
              notification={link.notification}
            />
          ))}
          <div className="left_link hover1">
            <div className="small_circle rotate360">
              <ArrowDown1 />
            </div>
            <span>Hiện ít hơn</span>
          </div>
        </div>
      )}
      <div className="splitter">
        <div className="shortcut">
          <div className="heading">Nối tắt của bạn</div>
          <div className="edit_shortcut">Sửa</div>
        </div>
        <div className="shortcut_list">
          <Shortcut
            link="https://www.youtube.com/watch?v=kFhnLeYOyiA&list=RDkFhnLeYOyiA&start_radio=1"
            img="../../images/ytb.png"
            name="Đã Từng Vô Giá"
          />
          <Shortcut
            link="https://www.instagram.com/"
            img="../../images/insta.png"
            name="Instagram"
          />
        </div>
        <div className={`fb_copyright ${visible && "relative_fb_copyright"}`}>
          <Link to="/">Quyền riêng tư</Link>
          <span>. </span>
          <Link to="/">Điều khoản</Link>
          <span>. </span>
          <Link to="/">Quảng cáo</Link>
          <span>. </span>
          <Link to="/">
            Lựa chọn <br /> quảng cáo <i className="ad_choices_icon"></i>
          </Link>
          <span>. </span>
          <Link to="/">Cookies</Link>
          <span>. </span>
          <Link to="/">Xem thêm</Link>
          <span>. </span>
          Meta @ 2022
          <br />
        </div>
      </div>
    </div>
  );
};

export default LeftHonme;
