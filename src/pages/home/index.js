import React, { useRef, useState } from "react";
import Header from "../../components/header";
import LeftHonme from "../../components/home/left";
import ClickOutside from "../../helpers/clickOutside";
import { useSelector } from "react-redux";
import HomeRight from "../../components/home/right";
import Stories from "../../components/home/stories";
import CreatePost from "../../components/createPost";
import "./style.css";
import Post from "../../components/post";
import { useEffect } from "react";

function Home({ setPostVisible, posts }) {
  const { user } = useSelector((user) => ({ ...user }));
  const [visible, setVisible] = useState(true);
  const middle = useRef(null);
  const [height, setHeight] = useState();
  useEffect(() => {
    setHeight(middle.current.clientHeight);
  }, []);
  const el = useRef(null);
  ClickOutside(el, () => {
    setVisible(false);
  });
  return (
    <div className="home" style={{ height: `${height + 100}px` }}>
      <Header />
      <LeftHonme user={user} />
      <div className="home_middle" ref={middle}>
        <Stories />
        <CreatePost user={user} setPostVisible={setPostVisible} />
        <div className="posts">
          {posts.map((post) => (
            <Post key={post._id} post={post} user={user} />
          ))}
        </div>
      </div>
      <HomeRight user={user} />
      {visible && <div className="card" ref={el}></div>}
    </div>
  );
}

export default Home;
