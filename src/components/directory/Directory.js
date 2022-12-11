import React from 'react'
import { useSelector } from 'react-redux'
import MenuItems from '../menuItems/MenuItems'
import { Spinner } from '../withSpinner/WithSpinner'
import './directory.scss'

const Directory = () => {
    const menuItems = useSelector(state => state.directory.directoryItems);
    const isFetching = useSelector(state => state.directory.isFetching);
    
    return (
        <div className="directory-menu">
            {isFetching ? <Spinner/> : menuItems?.map((item,idx)=>{
                return <MenuItems item={item} key={idx} />

            })}
        </div>
    )
}

export default Directory