import React from "react";
import Carousel from "react-elastic-carousel";
import "./Cards.css";
import f3 from '../../../Assets/f3.jpg'
import f4 from '../../../Assets/f4.jpg'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const data=[
  {
    name:'Aditya',
    img: f4,
    com: 'TCS',
  },
  {
    name:'Ankush',
    img: f3,
    com: 'TCS',
  },
  {
    name:'Aditya',
    img: f4,
    com: 'TCS',
  },
  {
    name:'Ankush',
    img: f3,
    com: 'TCS',
  },
  {
    name:'Aditya',
    img: f4,
    com: 'TCS',
  },
  {
    name:'Ankush',
    img: f3,
    com: 'TCS',
  },
  {
    name:'Aditya',
    img: f4,
    com: 'TCS',
  },
  {
    name:'Aditya',
    img: f3,
    com: 'TCS',
  },
  {
    name:'Aditya',
    img: f4,
    com: 'TCS',
  },
  {
    name:'Aditya',
    img: f3,
    com: 'TCS',
  },
]

function Cards() {
  return (
<>
      <h1>Notable Alumni</h1>
        <Carousel breakPoints={breakPoints}>
            {data.map((d)=>(
                <span>
            <div className='team-cardss'>
            <div className="team-card">
            <img src={d.img} alt='' />
            <span>{d.name}</span>
            <span className='company'>{d.com}</span>
            <button>Read More</button>
            </div>
            </div> 
          </span>
            ))}
        </Carousel>
</>
  )
}

export default Cards
