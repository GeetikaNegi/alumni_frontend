import React from 'react'
import './Cards.css'
function Cards(props) {
  return (
    <div className='mycards'>
      My Card No. {props.cardno}
    </div>
  )
}

export default Cards
