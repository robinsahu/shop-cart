import React from "react";
import "./menu-item.styles.scss";

const MenuIteam = ({ title, imageUrl, size }) => {
  //you can use destructuring as well in argument directoly rather than use "props"
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuIteam;
