import React from "react";
import Carousel from "react-material-ui-carousel";
import "assets/css/components/carouselStyle.css";
//Import Images
import solarSystem from "assets/img/apps/ezexplore/explore-solar-system.jpg";
import earth from "assets/img/apps/ezexplore/explore-earth.jpg";
import sun from "assets/img/apps/ezexplore/explore-sun.jpg";
import around from "assets/img/apps/ezexplore/explore-around-the-world.jpg";
import eiffel from "assets/img/apps/ezexplore/explore-eiffel.jpg";
import liberty from "assets/img/apps/ezexplore/explore-liberty.jpg";
export default function CarouselExplore() {
  return (
    <div className="carousel-explore-body">
      <Carousel autoPlay={true} indicators={false}>
        <img src={solarSystem} alt="" className={"carousel-explore-img"} />
        <img src={earth} alt="" className={"carousel-explore-img"} />
        <img src={sun} alt="" className={"carousel-explore-img"} />
        <img src={around} alt="" className={"carousel-explore-img"} />
        <img src={eiffel} alt="" className={"carousel-explore-img"} />
        <img src={liberty} alt="" className={"carousel-explore-img"} />
      </Carousel>
    </div>
  );
}
