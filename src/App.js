import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CreatePostPopup from "./components/createPostPopup";
import Home from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/profile";
import LoggedInRoutes from "./routes/loggedInRoutes";
import NotLoggedInRoutes from "./routes/notLonggedInRoutes";

function App() {
  const { user } = useSelector((state) => ({ ...state }));
  return (
    <div className="App">
      {/* <CreatePostPopup /> */}
      <Routes>
        <Route element={<NotLoggedInRoutes />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<LoggedInRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
