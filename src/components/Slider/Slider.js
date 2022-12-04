import React from 'react'
import Slider from "react-slick";
import CardWithImages from '../CardWithImages/CardWithImages';

function Responsive() {
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
          <div>
            {/* <h3>1</h3> */}
            <CardWithImages imgSrc="https://resources.turo.com/f/81934/386x308/9bf274f19e/image_make_jeep-2x.jpg" title="Jeep"></CardWithImages>
          </div>
          <div>
            {/* <h3>2</h3> */}
            <CardWithImages imgSrc="https://resources.turo.com/f/81934/386x308/7dcf9bff19/image_make_tesla-2x.jpg" title="Tesla"></CardWithImages>
          </div>
          <div>
            {/* <h3>3</h3> */}
            <CardWithImages imgSrc="https://resources.turo.com/f/81934/386x308/ef857a4438/image_make_subaru-2x.jpg" title="Subaru"></CardWithImages>
          </div>
          <div>
            {/* <h3>4</h3> */}
            <CardWithImages imgSrc="https://resources.turo.com/f/81934/386x308/7e7ce60797/image_make_porsche-2x.jpg" title="Porsche"></CardWithImages>
          </div>
          <div>
            {/* <h3>5</h3> */}
            <CardWithImages imgSrc="https://resources.turo.com/f/81934/386x308/0c4f5f5186/image_make_bmw-2x.jpg" title="BMW"></CardWithImages>
          </div>
          <div>
            {/* <h3>6</h3> */}
            <CardWithImages imgSrc="https://www.nissanusa.com/content/dam/Nissan/us/homepage/2022/promos/ariya/2023-nissan-ariya-electric-crossover-suv-d-1.jpg" title="Nissan"></CardWithImages>
          </div>
          <div>
            {/* <h3>7</h3> */}
            <CardWithImages imgSrc="https://images.squarespace-cdn.com/content/v1/5672e53f40667a634d15f9d8/1609856822623-YMZBY5VIE04L0G5W2MV7/BentaygaHybrid_4500+x+3000+px_2020_ByTomKahler+%283+of+18%29.jpg?format=2500w" title="Kia"></CardWithImages>
          </div>
          <div>
            {/* <h3>8</h3> */}
            <CardWithImages imgSrc="https://images.squarespace-cdn.com/content/v1/5672e53f40667a634d15f9d8/1654437724002-AX4P064ZCPETGPF82VUE/Anglesey_Sf40-Pista_June2022_ByTomKahler_Lowres.jpg?format=2500w" title="Jaguar"></CardWithImages>
          </div>
        </Slider>
      </div>
    );
  }
export default Responsive