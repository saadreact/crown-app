import React,{useEffect, useState} from 'react'
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview'

const ShopPage = () => {

  const[collection, setCollection]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:8001/shopPage").then(res => res.json())
    .then(data => setCollection(data))
  },[])


  return (
    <>
    {
      collection?.map((item,idx)=>{
          return <CollectionPreview key={idx} items={item} />
      })
    }
    </>
  )
}

export default ShopPage