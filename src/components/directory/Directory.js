import React from 'react'
import { useSelector } from 'react-redux'
import MenuItems from '../menuItems/MenuItems'
import './directory.scss'

const Directory = () => {
    const menuItems = useSelector(state => state.directory.directoryItems);

    return (
        <div className="directory-menu">
            {menuItems?.map((item,idx)=>{
                return <MenuItems item={item} key={idx} />

            })}
        </div>
    )
}

export default Directory