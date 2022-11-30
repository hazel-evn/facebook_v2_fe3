import React from "react";
import CreatePost from "../../components/createPost";
import Header from "../../components/header";
import GridPosts from "./gridPost";
import "./index.css";
import ProfileMenu from "./profileMenu";
import ProfielPictureInfos from "./ProfilePicture";
import PplYouMayKnow from "./youMayknow";
import { useSelector } from "react-redux";
import Post from "../../components/post";

function Profile({ user, post }) {
  return (
    <div className="profile">
      <Header page="profile" />
      <div className="profile_top">
        <div className="profile_container">
          <div className="profile_cover">
            <div className="udpate_cover_wrapper">
              <div className="open_cover_update">
                <i className="camera_filled_icon"></i>
                Thêm ảnh bìa
              </div>
            </div>
          </div>
          <ProfielPictureInfos user={user} />
          <ProfileMenu />
        </div>
      </div>

      <div className="profile_bottom">
        <div className="profile_container">
          <div className="bottom_container">
            <PplYouMayKnow />
            <div className="profile_grid">
              <div className="profile_left"></div>
              <div className="profile_right">
                <CreatePost user={user} />
                <GridPosts />
                <div className="posts">
                  {/* <Post post={post} user={user} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
