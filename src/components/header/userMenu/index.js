import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DisplayAccessibility from "./displayAccessibility";
import HelpSupport from "./helpSupport";
import SettingsPrivacy from "./settingsPrivacy";
import {useDispatch} from "react-redux";
import Cookies from "js-cookie";

const UserMenu = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(0);
  const logout = () =>{
    Cookies.set("user", "");
    dispatch({
      type:"LOGOUT"
    })
    navigate("/login");
  }
  return (
    <div className="mmenu">
      {visible === 0 && (
        <div>
          <Link href="/profile" className="mmenu_header hover3">
            <img src={user?.picture} alt="" />
            <div className="mmenu_col">
              <span>
                {user?.first_name}
                {user?.last_name}
              </span>
              <span>Xem hồ sơ của bạn</span>
            </div>
          </Link>
          <div className="mmenu_splitter"></div>
          <div className="mmenu_main hover3">
            <div className="small_circle">
              <i className="report_filled_icon"></i>
            </div>
            <div className="mmenu_col">
              <div className="mmenu_span1">Đưa ra phản hồi</div>
              <div className="mmenu_span2">
                Giúp chúng tôi cải thiện facebook
              </div>
            </div>
          </div>
          <div className="mmenu_splitter"></div>
          <div className="mmenu_item hover3" onClick={() => setVisible(1)}>
            <div className="small_circle">
              <i className="settings_filled_icon"></i>
            </div>
            <span>Cài đặt & sự riêng tư</span>
            <div className="rArrow">
              <i className="right_icon"></i>
            </div>
          </div>
          <div className="mmenu_splitter"></div>
          <div className="mmenu_item hover3" onClick={() => setVisible(2)}>
            <div className="small_circle">
              <i className="help_filled_icon"></i>
            </div>
            <span>Trợ giúp & hỗ trợ</span>
            <div className="rArrow">
              <i className="right_icon"></i>
            </div>
          </div>
          <div className="mmenu_splitter"></div>
          <div className="mmenu_item hover3" onClick={() => setVisible(3)}>
            <div className="small_circle">
              <i className="dark_filled_icon"></i>
            </div>
            <span>Màn hình & trợ năng</span>
            <div className="rArrow">
              <i className="right_icon"></i>
            </div>
          </div>
          <div className="mmenu_splitter"></div>
          <div className="mmenu_item hover3" onClick={() => {logout()}}>
            <div className="small_circle">
              <i className="logout_filled_icon"></i>
            </div>
            <span>Đăng xuất</span>
          </div>
        </div>
      )}
      {visible === 1 && <SettingsPrivacy setVisible={setVisible} />}
      {visible === 2 && <HelpSupport setVisible={setVisible} />}
      {visible === 3 && <DisplayAccessibility setVisible={setVisible} />}
    </div>
  );
};

export default UserMenu;
