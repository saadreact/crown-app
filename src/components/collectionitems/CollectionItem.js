import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleCart } from '../../redux/slices/cartSlice';
import { CustomButtonContainer } from '../customButton/CustomButton.styles';
import { CollectionItemContainer, CollectionFooter,CollectionItemPrice,CollectionItemName, CollectionImage } from './CollectionItemComp.style';


export const CollectionItem = ({item, collectionwidth}) => {
  const dispatch = useDispatch();
  return (
    <CollectionItemContainer collectionwidth={collectionwidth}>
        <CollectionImage style={{backgroundImage:`url(${item.imageUrl})`}}></CollectionImage>
        <CollectionFooter>
            <CollectionItemName>{item.name}</CollectionItemName>
            <CollectionItemPrice>${item.price}</CollectionItemPrice>
        </CollectionFooter>
        <CustomButtonContainer collectionButton onClick={() => dispatch(toggleCart({type:"ADD_TO_CART",payload:item}))}>Add to cart</CustomButtonContainer>
    </CollectionItemContainer>
  )
}

