import React, { useRef, useState } from "react";
import Header from "../../components/header";
import LeftHonme from "../../components/home/left";
import ClickOutside from "../../helpers/clickOutside";
import { useSelector } from "react-redux";
import HomeRight from "../../components/home/right";

function Home() {
  const { user } = useSelector((user) => ({ ...user }));
  const [visible, setVisible] = useState(true);
  const el = useRef(null);
  ClickOutside(el, () => {
    setVisible(false);
  });
  return (
    <div>
      <Header />
      <LeftHonme user={user} />
      <HomeRight user={user} />
      {visible && <div className="card" ref={el}></div>}
    </div>
  );
}

export default Home;
