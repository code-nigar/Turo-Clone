import React from 'react'
import Slider from "react-slick";
import CardWithImages from '../CardWithImages/CardWithImages';

function Responsive(props) {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <p>Browse by make</p>
        <Slider {...settings}>
          {props.arr.map( data =>{
            return <div><CardWithImages imgSrc={data.imgSrc} title={data.title}></CardWithImages></div>
          })}
        </Slider>
      </div>
    );
  }
export default Responsive