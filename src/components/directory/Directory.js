import React,{useState,useEffect} from 'react'
import MenuItems from '../menuItems/MenuItems'
import './directory.scss'

const Directory = () => {
    const[menuItems,setMenuItems ] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8001/menuitems').then((res)=>{
            return res.json()
        }).then(data => setMenuItems(data));
    },[])
    
    return (
        <div className="directory-menu">
            {menuItems?.map((item,idx)=>{
                return <MenuItems item={item} key={idx} />

            })}
        </div>
    )
}

export default Directory