import React from "react";
import "./style.css";
import { Plus, ArrowRight } from "../../../svg";
import { stories } from "../../../data/home";
import Story from "./story";
const Stories = () => {
  return (
    <div className="stories">
      <div className="create_story_card">
        <img
          src="../../images/default_pic.png"
          alt=""
          className="create_story_img"
        />
        <div className="plus_story">
          <Plus />
        </div>
        <div className="story_create_text">Tạo tin</div>
      </div>
      {stories.map((story, index) => (
        <Story story={story} key={index} />
      ))}
      <div className="white_circle">
        <ArrowRight />
      </div>
    </div>
  );
};

export default Stories;
