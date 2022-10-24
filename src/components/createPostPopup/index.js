import React, { useState } from "react";
import "./style.css";
const CreatePostPopup = ({ user }) => {
  const [text, setText] = useState("");
  const [showPrev, setShowPrev] = useState(false);
  return (
    <div className="blur">
      <div className="postBox">
        <div className="box_header">
          <div className="box_circle">
            <i className="exit_icon"></i>
          </div>
          <span>Create Post</span>
        </div>
        <div className="box_profile">
          <img
            src="https://toigingiuvedep.vn/wp-content/uploads/2021/01/avatar-dep-cute.jpg"
            alt=""
            className="box_profile_img"
          />
          <div className="box_col">
            <div className="box_profile_name">Mohamed Hajii</div>
            <div className="box_privacy">
              <img src="../../../icons/public.png" alt="" />
              <span>Public</span>
              <i className="arrowDown_icon "></i>
            </div>
          </div>
        </div>
        {!showPrev && (
          <div className="flex_center">
            <textarea
              maxLength="100"
              value={text}
              placeholder="What's is on your mind Mohamed"
              className="post_input"
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>
        )}
        <div className="post_emoji_wrap">
          <div className="comment_emoji_picker rlmove"></div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostPopup;
