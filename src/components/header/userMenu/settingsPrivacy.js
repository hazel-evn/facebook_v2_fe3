import React from "react";

const SettingsPrivacy = ({ setVisible }) => {
  return (
    <div className="absolute_wrap">
      <div className="absolute_wrap_header">
        <div
          className="circle hover1"
          onClick={() => {
            setVisible(0);
          }}
        >
          <i className="arrow_back_icon"></i>
        </div>
        Cài đặt & sự riêng tư
      </div>
      <div className="mmenu_item hover3">
        <div className="small_circle">
          <i className="settings_filled_icon"></i>
        </div>
        <span>Cài đặt</span>
      </div>
      <div className="mmenu_item hover3">
        <div className="small_circle">
          <i className="privacy_checkup_icon"></i>
        </div>
        <span>Kiểm tra quyền riêng tư</span>
      </div>
      <div className="mmenu_item hover3">
        <div className="small_circle">
          <i className="privacy_shortcuts_icon"></i>
        </div>
        <span>Trung tâm quyền riêng tư</span>
      </div>
      <div className="mmenu_item hover3">
        <div className="small_circle">
          <i className="activity_log_icon"></i>
        </div>
        <span>Nhật ký hoạt động</span>
      </div>
      <div className="mmenu_item hover3">
        <div className="small_circle">
          <i className="news_icon"></i>
        </div>
        <span>Tùy chọn bảng feed</span>
      </div>
      <div className="mmenu_item hover3">
        <div className="small_circle">
          <i className="language_icon"></i>
        </div>
        <span>Ngôn ngữ</span>
      </div>
    </div>
  );
};

export default SettingsPrivacy;
