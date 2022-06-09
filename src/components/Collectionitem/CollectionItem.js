import React from 'react'
import { useDispatch } from 'react-redux';
import { addCartItems } from '../../redux/slices/cartSlice';
import CustomButton from '../customButton/CustomButton';
import './CollectionItem.scss';


const CollectionItem = ({item}) => {
  const dispatch = useDispatch();
  return (
    <div className="collection-item">
        <div className="image" style={{backgroundImage:`url(${item.imageUrl})`}}></div>
        <div className="collection-footer">
            <span className="name">{item.name}</span>
            <span className="price">{item.price}</span>
        </div>
        <CustomButton inverted onClick={() => dispatch(addCartItems(item))}>Add to cart</CustomButton>
    </div>
  )
}

export default CollectionItem