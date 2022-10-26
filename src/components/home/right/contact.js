import React from "react";

const Contact = ({ user }) => {
  return (
    <div className="contact hover3">
      <div className="contact_img">
        <img src={user.user.picture} alt="" />
      </div>
      <span>
        {user.user.first_name} {user.user.last_name}
      </span>
    </div>
  );
};

export default Contact;
