import React, { Component }from 'react'
import Slider from "react-slick";
import CardWithImages from '../CardWithImages/CardWithImages';

export default class Responsive extends Component {
  render() {
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
        <Slider {...settings}>
          <div>
            {/* <h3>1</h3> */}
            <CardWithImages></CardWithImages>
          </div>
          <div>
            {/* <h3>2</h3> */}
            <CardWithImages></CardWithImages>
          </div>
          <div>
            {/* <h3>3</h3> */}
            <CardWithImages></CardWithImages>
          </div>
          <div>
            {/* <h3>4</h3> */}
            <CardWithImages></CardWithImages>
          </div>
          <div>
            {/* <h3>5</h3> */}
            <CardWithImages></CardWithImages>
          </div>
          <div>
            {/* <h3>6</h3> */}
            <CardWithImages></CardWithImages>
          </div>
          <div>
            {/* <h3>7</h3> */}
            <CardWithImages></CardWithImages>
          </div>
          <div>
            {/* <h3>8</h3> */}
            <CardWithImages></CardWithImages>
          </div>
        </Slider>
      </div>
    );
  }
}