import React from "react";
import "./menu-items.scss";

const MenuItems = ({item}) => {
  return (
    <>
      <div className={`${item.size} menu-item`}>
      <div className="background-image" style={{backgroundImage: `url(${item.imageUrl})` }}/>
        <div className="content">
          <h1 className="title">{item.title.toUpperCase()}</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
    </>
  );
};

export default MenuItems;
