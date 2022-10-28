import React, { useRef, useState } from "react";
import Header from "../../components/header";
import LeftHonme from "../../components/home/left";
import ClickOutside from "../../helpers/clickOutside";
import { useSelector } from "react-redux";
import HomeRight from "../../components/home/right";
import Stories from "../../components/home/stories";
import CreatePost from "../../components/createPost";
import "./style.css";

function Home() {
  const { user } = useSelector((user) => ({ ...user }));
  const [visible, setVisible] = useState(true);
  const el = useRef(null);
  ClickOutside(el, () => {
    setVisible(false);
  });
  return (
    <div className="home">
      <Header />
      <LeftHonme user={user} />
      <div className="home_middle">
        <Stories />
        <CreatePost user={user} />
      </div>
      <HomeRight user={user} />
      {visible && <div className="card" ref={el}></div>}
    </div>
  );
}

export default Home;
