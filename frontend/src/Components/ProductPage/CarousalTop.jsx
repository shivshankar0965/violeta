import React from 'react'
import {CarousalOne} from"./DataOfCaraousals/CarousalOne"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarousalTop = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div style={{ display: "grid" }}>
      <Carousel responsive={responsive} transitionDuration={1000}>
        {CarousalOne.map((el) => {
          return (
            <div  key={el.id}>
              <div style={{ position: "relative", padding: "1rem"}}>
                <img
                  
                  src={el.image}
                  alt="rty"
                  height={{ lg: "100%", md: "80%", sm: "60%" }}
              
                  width="100%"
                />
              </div>
              
            </div>
          );
        })}
      </Carousel>
 
    </div>
  );
};

export default CarousalTop;