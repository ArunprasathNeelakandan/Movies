
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';
import {Link} from 'react-router-dom'
import React from 'react';

function MovieSliders(props) {
  const settings = {
    className:'slider-container',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true, 
    // centerPadding: '150px',
    adaptiveHeight:true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  };

  const { data } = props;

 

  return (
    <div className="slider-list">
      <Slider {...settings}>
      {data.map((each)=>{
         const { id, posterPath, title } = each; 
         console.log(posterPath)
         return (
              <Link to={`/movies/${id}`}>
              <img src={posterPath} className="slider-image" alt={title} />
              </Link>   
         );
      })}
    </Slider>
    </div>
    
  );
}

export default MovieSliders;