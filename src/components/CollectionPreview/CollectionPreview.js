import React from "react";
import CollectionItem from "../Collectionitem/CollectionItem";
import "./CollectionPreview.scss";

const CollectionPreview = ({ items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{items.title}</h1>
      <div className="preview">
        {items?.items?.filter((item,idx) => idx < 4).map((el, idx) => {
          return <CollectionItem key={idx} item={el} collectionwidth/>;
        })}
      </div>
    </div>
  );
};

export default CollectionPreview;
