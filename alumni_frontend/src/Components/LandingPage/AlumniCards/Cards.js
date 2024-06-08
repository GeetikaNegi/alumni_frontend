import React from "react";
import Carousel from "react-elastic-carousel";
import "./Cards.css";
import f1 from '../../../Assets/f1.jpeg'
import f2 from '../../../Assets/f2.jpeg'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const data=[
  {
    name:'Geetika Negi',
    img: f1,
    com: 'TCS',
  },
  {
    name:'Ankush',
    img: f2,
    com: 'TCS',
  },
  {
    name:'Geetika Negi',
    img: f1,
    com: 'TCS',
  },
  {
    name:'Ankush',
    img: f2,
    com: 'TCS',
  },
  {
    name:'Geetika Negi',
    img: f1,
    com: 'TCS',
  },
  {
    name:'Ankush',
    img: f2,
    com: 'TCS',
  },
  {
    name:'Geetika Negi',
    img: f1,
    com: 'TCS',
  },
  {
    name:'Geetika Negi',
    img: f2,
    com: 'TCS',
  },
  {
    name:'Geetika Negi',
    img: f1,
    com: 'TCS',
  },
  {
    name:'Geetika Negi',
    img: f2,
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
