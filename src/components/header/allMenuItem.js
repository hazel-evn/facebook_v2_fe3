import React from "react";

const AllMenuItem = ({ ...props }) => {
  return (
    <div className="all_menu_item hover1">
      <img src={`../../left/${props.icon}.png`} />
      <div className="all_menu_col">
        <span>{props.name}</span>
        <span>{props.description}</span>
      </div>
    </div>
  );
};

export default AllMenuItem;
