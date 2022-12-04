import React from "react";
import Slider from "react-slick";
import BrowseCarFeature from "../BrowseCarFeature/BrowseCarFeature";

function FeaturedSection() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <div className="mt-5">
      <Slider {...settings}>
        <div>
          <BrowseCarFeature
            imgSrc="https://resources.turo.com/f/81934/416x284/6e085cbe0e/image_outdoors_416x285.jpg"
            label="to conquer the great outdoors"
            para="Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees."
          />
        </div>
        <div>
          <BrowseCarFeature
            imgSrc="https://resources.turo.com/f/81934/416x284/7c424a07d5/image_unwind_416x285.jpg"
            label="to unwind for the weekend"
            para="From daily drivers to spirited sports cars, ditch the grind with convenient nearby cars."
          />
        </div>
        <div>
          <BrowseCarFeature
            imgSrc="https://resources.turo.com/f/81934/416x284/929b21c4fa/image_upgrade_416x285.jpg"
            label="to upgrade your vacation plans"
            para="Skip the rental car counter and find the perfect car to complement your vacation vibe."
          />
        </div>
        <div>
          <BrowseCarFeature
            imgSrc="https://resources.turo.com/f/81934/416x284/1e828ae782/image_scenic_416x285.jpg"
            label="for scenic corners & curves"
            para="Get your fill of high-performance thrills, with the richest selection of luxury and exotic vehicles anywhere."
          />
        </div>
        <div>
          <BrowseCarFeature
            imgSrc="https://resources.turo.com/f/81934/416x284/a3870434ac/image_try_416x285.jpg"
            label="to try before you buy"
            para="Make sure your future wheels work well with your lifestyle by taking your time in the driver’s seat."
          />
        </div>
        <div>
          <BrowseCarFeature
            imgSrc="https://resources.turo.com/f/81934/416x284/fa43ee8e2b/image_errand_416x285.jpg"
            label="to make errand day easier"
            para="Book a roomy truck or SUV to ease your errand day stress, or to motivate your moving day."
          />
        </div>
      </Slider>
    </div>
  );
}

export default FeaturedSection;
