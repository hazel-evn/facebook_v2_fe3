import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Login from "./pages/login";
import Profile from "./pages/profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
