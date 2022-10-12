import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
