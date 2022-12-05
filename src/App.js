import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CreatePostPopup from "./components/createPostPopup";
import Post from "./components/post";
import Home from "./pages/home";
import Activate from "./pages/home/activate";
import Login from "./pages/login";
import Profile from "./pages/profile";
import LoggedInRoutes from "./routes/loggedInRoutes";
import NotLoggedInRoutes from "./routes/notLonggedInRoutes";
function reducer(state, action) {
  switch (action.type) {
    case "POSTS_REQUEST":
      return { ...state, loading: true, error: "" };
    case "POSTS_SUCCESS":
      return { ...state, loading: false, posts: action.payload, error: "" };
    case "POSTS_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

function App() {
  const [postVisible, setPostVisible] = useState(false);
  const { user } = useSelector((state) => ({ ...state }));
  const [{ loading, error, posts }, dispatch] = useReducer(reducer, {
    loading: false,
    posts: [],
    errors: "",
  });
  useEffect(() => {
    getAllPost();
  }, []);
  const getAllPost = async () => {
    try {
      dispatch({
        type: "POSTS_REQUEST",
      });
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/getAllPosts`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      dispatch({
        type: "POSTS_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "POSTS_ERROR",
        payload: "Lỗi rồi",
      });
    }
  };
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
          <Route
            path="/"
            element={<Home setPostVisible={setPostVisible} posts={posts} />}
          />
          <Route
            path="/profile/:username"
            element={<Profile user={user} setPostVisible={setPostVisible} />}
          />
          <Route path="/activate/:token" element={<Activate />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
