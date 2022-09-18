import React from "react";
import CollectionItem from "../collectionitem/CollectionItem";
import "./ShopPreview.scss";

const ShopPreview = ({ items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{items.title}</h1>
      <div className="preview">
        {items?.items?.filter((item,idx) => idx < 4).map((el, idx) => {
          return <CollectionItem key={idx} item={el} collectionwidth={true}/>;
        })}
      </div>
    </div>
  );
};

export default ShopPreview;
