import React,{useState} from 'react';
import { careerdrop } from './Navitems';
import { Link } from 'react-router-dom';
import'./Dropdown.css';

function Careerdrop() {
    const[crdropdown,setCrdropdown]=useState(false);
  return (
    <>
      <ul className={crdropdown?'crservices-submenu clicked':'crservices-submenu'}
      onClick={()=>setCrdropdown(!crdropdown)}>
            {careerdrop.map(item=>
                {
                    return(
                        <li key={item.id} className={item.cName} onClick={()=>setCrdropdown(false)}>
                            <Link to={item.path}>{item.title}</Link>
                        </li>

                    );
                })}
      </ul>
    </>
  )
}

export default Careerdrop
