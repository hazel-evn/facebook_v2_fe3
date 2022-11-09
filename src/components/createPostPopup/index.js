import React, { useState, useRef } from "react";
import { createPost } from "../../functions/post";
import ClickOutside from "../../helpers/clickOutside";
import AddToYourPost from "./AddToYourPost";
import EmojiPickerBackground from "./EmojiPickerBackground";
import ImagePreview from "./ImagePreview";
import { PulseLoader } from "react-spinners";
import "./style.css";

const CreatePostPopup = ({ user, setPostVisible }) => {
  const popup = useRef(null);
  const [text, setText] = useState("");
  const [showPrev, setShowPrev] = useState(false);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [background, setBackground] = useState("");
  ClickOutside(popup, () => {
    setPostVisible(false);
  });
  const postSubmit = async () => {
    if (background) {
      setLoading(true);
      const res = await createPost(
        null,
        background,
        text,
        null,
        user.id,
        user.token
      );
      if (res === 200) {
        setText("");
      } else {
        console.log(res);
      }
    }
  };
  return (
    <div className="blur">
      <div className="postBox" ref={popup}>
        <div className="box_header">
          <div className="small_circle" onClick={() => setPostVisible(false)}>
            <i className="exit_icon"></i>
          </div>
          <span>Create Post</span>
        </div>
        <div className="box_profile">
          <img src={user?.picture} alt="" className="box_profile_img" />
          <div className="box_col">
            <div className="box_profile_name">
              {user?.first_name} {user?.last_name}
            </div>
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
              setText={setText}
              showPrev={showPrev}
              setBackground={setBackground}
              background={background}
              user={user}
            />
          </div>
        ) : (
          <ImagePreview
            text={text}
            user={user}
            setText={setText}
            images={images}
            setImages={setImages}
            setShowPrev={setShowPrev}
          />
        )}
        <AddToYourPost setShowPrev={setShowPrev} />
        <button
          className="post_submit"
          onClick={() => {
            postSubmit();
          }}
        >
          {loading ? <PulseLoader color="#fff" size={5} /> : "Post"}
        </button>
      </div>
    </div>
  );
};

export default CreatePostPopup;
