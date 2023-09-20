import React from "react";
import "./Pictures.css";

const Pictures = (props) => {
  return (
    <div className="images">
      {props.photos.map((item, index) => (
        <div key={index}>
            <img src={item.imageLink} className="law" alt="law_aesthetic" />
        </div>
      ))}
    </div>
  );
};

export default Pictures;
