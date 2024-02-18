import React,{useState} from 'react';
import { aboutdrop } from './Navitems';
import { Link } from 'react-router-dom';
import'./Dropdown.css';

function Aboutdrop() {
    const[abdropdown,setAbdropdown]=useState(false);
  return (
    <>
      <ul className={abdropdown?'abservices-submenu clicked':'abservices-submenu'}
      onClick={()=>setAbdropdown(!abdropdown)}>
            {aboutdrop.map(item=>
                {
                    return(
                        <li key={item.id} className={item.cName} onClick={()=>setAbdropdown(false )}>
                            <Link to={item.path}>{item.title}</Link>
                        </li>

                    );
                })}
      </ul>
    </>
  )
}

export default Aboutdrop
