import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CollectionItem from '../../components/collectionitem/CollectionItem';
import { Spinner } from '../../components/withSpinner/WithSpinner';
import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions';
import './CollectionPage.scss';

const CollectionPage = () => {
  const {name} =  useParams();
  const items = useSelector(state => state.shop.shop[name]?.items);
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    dispatch(fetchCollectionStartAsync())
  },[])

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

export default CollectionPage