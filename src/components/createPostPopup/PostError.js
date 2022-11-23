import React from "react";

const PostError = ({ error, setError }) => {
  return (
    <div className="postError">
      <div className="error">{error}</div>
      <button className="blue_btn" onClick={() => setError("")}>
        Try again
      </button>
    </div>
  );
};

export default PostError;
