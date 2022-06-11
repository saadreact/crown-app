import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CollectionItem from '../../components/Collectionitem/CollectionItem';
import NotFound from '../notfound/NotFound';
import './CollectionPage.scss';

const CollectionPage = () => {
  const {name} =  useParams();
  const items = useSelector(state => state.shop.shop[name]?.items);
 
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