import React from 'react'
import { useDispatch } from 'react-redux';
import { addCartItems } from '../../redux/slices/cartSlice';
import { CustomButtonContainer } from '../customButton/CustomButton.styles';
import { CollectionItemContainer, CollectionFooter,CollectionItemPrice,CollectionItemName, CollectionImage } from './CollectionItem.style';


const CollectionItem = ({item, collectionwidth}) => {
  const dispatch = useDispatch();
  return (
    <CollectionItemContainer collectionwidth={collectionwidth}>
        <CollectionImage style={{backgroundImage:`url(${item.imageUrl})`}}></CollectionImage>
        <CollectionFooter>
            <CollectionItemName>{item.name}</CollectionItemName>
            <CollectionItemPrice>{item.price}</CollectionItemPrice>
        </CollectionFooter>
        <CustomButtonContainer collectionButton onClick={() => dispatch(addCartItems(item))}>Add to cart</CustomButtonContainer>
    </CollectionItemContainer>
  )
}

export default CollectionItem