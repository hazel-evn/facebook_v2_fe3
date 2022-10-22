import React, { useRef, useState } from "react";
import Header from "../../components/header";
import ClickOutside from "../../helpers/clickOutside";

function Home() {
  const [visible, setVisible] = useState(true);
  const el = useRef(null);
  ClickOutside(el, () => {
    setVisible(false);
  });
  return (
    <div>
      <Header />
      {visible && <div className="card" ref={el}></div>}
    </div>
  );
}

export default Home;
