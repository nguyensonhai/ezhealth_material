import React from "react";
import "assets/css/components/sliderStyle.css";

export default function SliderEzExplore() {
  return (
    <div>
      <div className={"slider-container-explore"}>
        <section id="slider-image-explore">
          <input type="radio" name="slider-ez-explore" id="s1-explore" />
          <input type="radio" name="slider-ez-explore" id="s2-explore" />
          <input type="radio" name="slider-ez-explore" id="s3-explore" />
          <input type="radio" name="slider-ez-explore" id="s4-explore" />
          <input type="radio" name="slider-ez-explore" id="s5-explore" />
          <label htmlFor="s1-explore" id="slide-1-explore"></label>
          <label htmlFor="s2-explore" id="slide-2-explore"></label>
          <label htmlFor="s3-explore" id="slide-3-explore"></label>
          <label htmlFor="s4-explore" id="slide-4-explore"></label>
          <label htmlFor="s5-explore" id="slide-5-explore"></label>
        </section>
      </div>
    </div>
  );
}
