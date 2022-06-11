import React from "react";
import { useNavigate } from "react-router-dom";
import "./menu-items.scss";

const MenuItems = ({item}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={`${item.size} menu-item`} onClick={() => navigate(`shop/${item.title}`)}>
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
