import React,{useState} from 'react';
import { connectdrop } from './Navitems';
import { Link } from 'react-router-dom';
import'./Dropdown.css';

function Connectdrop() {
    const[codropdown,setCodropdown]=useState(false);
  return (
    <>
      <ul className={codropdown?'cnservices-submenu clicked':'cnservices-submenu'}
      onClick={()=>setCodropdown(!codropdown)}>
            {connectdrop.map(item=>
                {
                    return(
                        <li key={item.id} className={item.cName} onClick={()=>setCodropdown(false )}>
                            <Link to={item.path}>{item.title}</Link>
                        </li>

                    );
                })}
      </ul>
    </>
  )
}

export default Connectdrop
