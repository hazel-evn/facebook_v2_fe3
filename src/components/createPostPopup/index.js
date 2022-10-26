import React, { useState, useRef } from "react";
import AddToYourPost from "./AddToYourPost";
import EmojiPickerBackground from "./EmojiPickerBackground";
import ImagePreview from "./ImagePreview";
import "./style.css";

const CreatePostPopup = ({ user }) => {
  const [text, setText] = useState("");
  const [showPrev, setShowPrev] = useState(true);
  const [images, setImages] = useState([]);
  console.log(images);
  const textRef = useRef(null);
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
        {!showPrev ? (
          <div>
            <EmojiPickerBackground
              text={text}
              textRef={textRef}
              setText={setText}
            />
          </div>
        ) : (
          <ImagePreview
            text={text}
            textRef={textRef}
            setText={setText}
            images={images}
            setImages={setImages}
            setShowPrev={setShowPrev}
          />
        )}
        <AddToYourPost setShowPrev={setShowPrev} />
        <button className="post_submit">Post</button>
      </div>
    </div>
  );
};

export default CreatePostPopup;
