import React from "react";
import { useSelector } from "react-redux";
import CollectionPreview from "../CollectionPreview/CollectionPreview";
import './CollectionOverview.scss';

const CollectionOverview = () => {
  const collection = Object.values(useSelector((state) => state.shop.shop));
  return (
    <div className="collections-overview">
      {collection?.map((item, idx) => {
        return <CollectionPreview key={idx} items={item} />;
      })}
    </div>
  );
};

export default CollectionOverview;
