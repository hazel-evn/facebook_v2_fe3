import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CreatePostPopup from "./components/createPostPopup";
import Home from "./pages/home";
import Activate from "./pages/home/activate";
import Login from "./pages/login";
import Profile from "./pages/profile";
import LoggedInRoutes from "./routes/loggedInRoutes";
import NotLoggedInRoutes from "./routes/notLonggedInRoutes";

function App() {
  const [postVisible, setPostVisible] = useState(false);
  const { user } = useSelector((state) => ({ ...state }));
  return (
    <div className="App">
      {postVisible && (
        <CreatePostPopup user={user} setPostVisible={setPostVisible} />
      )}
      <Routes>
        <Route element={<NotLoggedInRoutes />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<LoggedInRoutes />}>
          <Route path="/" element={<Home setPostVisible={setPostVisible} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/activate/:token" element={<Activate />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
