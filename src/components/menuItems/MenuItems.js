import React from "react";
import { useNavigate } from "react-router-dom";
import "./menu-items.scss";
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from "./menu-item.styles";

const MenuItems = ({ item }) => {
  const navigate = useNavigate();
  return (
    <>
      <MenuItemContainer
        size={item.size}
        onClick={() => navigate(`/shop/${item.title}`)}
      >
        <BackgroundImageContainer
          className="background-image"
          imageUrl={item.imageUrl}
        />
        <ContentContainer className="content">
          <ContentTitle>{item.title.toUpperCase()}</ContentTitle>
          <ContentSubtitle>SHOP NOW</ContentSubtitle>
        </ContentContainer>
      </MenuItemContainer>
    </>
  );
};

export default MenuItems;
