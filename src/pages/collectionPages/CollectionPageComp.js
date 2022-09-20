import { collection, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './collectionPageStyles.scss';
import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions';
import { Spinner } from '../../components/withSpinner/WithSpinner';
import { CollectionItem } from '../../components/collectionitems/CollectionItem';

const CollectionPageComp = () => {
  const {name} =  useParams();
  const items = useSelector(state => state.shop.shop[name]?.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionStartAsync())
  }, []);
 
  return (
    items ? <div className='collection-page'>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div> : <Spinner />
  )
}

export default CollectionPageComp