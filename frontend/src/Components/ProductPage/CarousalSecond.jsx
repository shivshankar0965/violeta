import React from 'react'
import { Carousalsecond } from './DataOfCaraousals/CarousalOne';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Prod_Car from "../ProductPage/Prod_Car.module.css"


const CarousalSecond = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className={Prod_Car.mainDiv} >
      <Carousel responsive={responsive}  transitionDuration={1000}>
        {Carousalsecond.map((el) => {
          return (
            <div  id={Prod_Car.firstDiv} key={el.id} >
              <div   id={Prod_Car.imageDiv} >
                <img
                  src={el.image}
                  alt="images"
                  width="100%"
                />
              </div>
              <div id={Prod_Car.details}>
              <button id={Prod_Car.button}  >2 offers</button>
              <h3>{el.title}</h3>
              <div id={Prod_Car.oneLineDiv}>
              <h2>{el.price}</h2>
              <p><s>{el.cross}</s></p>
              <p>{el.off}</p>
              </div>
              </div>
              
            </div>
          );
        })}
      </Carousel>
 
    </div>
  );
};

export default CarousalSecond;