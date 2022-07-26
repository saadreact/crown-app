import { collection, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CollectionItem from '../../components/Collectionitem/CollectionItem';
import { db, updateCollectionFormat } from '../../firebase/firebase.utils';
import { updateShopData } from '../../redux/slices/shopSlice';
import NotFound from '../notfound/NotFound';
import './CollectionPage.scss';

const CollectionPage = () => {
  const {name} =  useParams();
  const items = useSelector(state => state.shop.shop[name]?.items);
  const dispatch = useDispatch();
  useEffect(() => {
    const collectionRef = query(collection(db, "collection"));
    onSnapshot(collectionRef, (snapshot) => {
       const recData = updateCollectionFormat(snapshot);
       dispatch(updateShopData(recData));
    });
  }, []);
 
  return (
    items ? <div className='collection-page'>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div> : <NotFound />
  )
}

export default CollectionPage