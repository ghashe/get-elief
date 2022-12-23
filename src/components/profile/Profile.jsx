import React from "react";
import "./profile.css";

const Profile = ({ img, title, text }) => {
  return (
    /* 
    <div className="mvv-contianer">

      <div className="mvv-contianer-image">
        <div />
        {img}
      </div>

      <div className="contianer">
        <div className="mvv-contianer-title">
          <div />
          <h1>{title}</h1>
        </div>
        <div className="mvv-contianer-text">
          <p>{text}</p>
        </div>
      </div>

    </div>
*/

    <div className="mvv-contianer">

      <div className="mvv-block ">
        <div className="image">
          {img}
        </div>

        <div className="content">
            <h5>{title}</h5>
           <p>{text}</p>
        </div>
      </div>

    </div>
  );
};

export default Profile;
