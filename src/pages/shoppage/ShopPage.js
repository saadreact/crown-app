import React from "react";
import { useDispatch } from "react-redux";
import CollectionOverview from "../../components/shopCollectionOverview/CollectionOverview";
import { fetchCollectionStartAsync } from "../../redux/shop/shop.actions";

const ShopPage = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchCollectionStartAsync())
  },[])

  return (
    <>
    <CollectionOverview />
    </>
  );
};

export default ShopPage;
