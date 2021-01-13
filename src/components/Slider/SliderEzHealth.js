import React from "react";
import "assets/css/components/sliderStyle.css";
export default function SliderEzHealth() {
  return (
    <div>
      <div className={"slider-container-health"}>
        <section id="slider-image-health">
          <input type="radio" name="slider-ez-health" id="s1-health" />
          <input type="radio" name="slider-ez-health" id="s2-health" />
          <input type="radio" name="slider-ez-health" id="s3-health" />
          <input type="radio" name="slider-ez-health" id="s4-health" />
          <input type="radio" name="slider-ez-health" id="s5-health" />
          <label htmlFor="s1-health" id="slide-1-health"></label>
          <label htmlFor="s2-health" id="slide-2-health"></label>
          <label htmlFor="s3-health" id="slide-3-health"></label>
          <label htmlFor="s4-health" id="slide-4-health"></label>
          <label htmlFor="s5-health" id="slide-5-health"></label>
        </section>
      </div>
    </div>
  );
}
