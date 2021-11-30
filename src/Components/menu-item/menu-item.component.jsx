import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";
// import { withRouter } from "react-router"; //it is kind of a function or high order component which takes another component as an argument and gives powered up componet and it can have than all props loke match,history related to that route

const MenuIteam = ({ title, imageUrl, size, history, linkUrl, match }) => {
  //you can use destructuring as well in argument directoly rather than use "props"
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
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

export default withRouter(MenuIteam);
