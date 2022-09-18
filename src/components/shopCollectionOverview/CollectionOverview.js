import React from "react";
import { useSelector } from "react-redux";
import ShopPreview from "../shopPreview/ShopPreview";
import './CollectionOverview.scss';
import { Spinner } from "../withSpinner/WithSpinner";

const CollectionOverview = () => {
  const collection = Object.values(useSelector((state) => state.shop.shop));
  const loading = useSelector(state => state.shop.isFetching)

  return (
    <div className="collections-overview">
      {loading ? <Spinner />  :collection?.map((item, idx) => {
        return <ShopPreview key={idx} items={item} />;
      })}
    </div>
  );
};

export default CollectionOverview;
