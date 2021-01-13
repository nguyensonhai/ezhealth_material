import React from "react";
import "assets/css/components/sliderStyle.css";

export default function SliderEzKidel() {
  return (
    <div>
      <div className={"slider-container-kidel"}>
        <section id="slider-image-kidel">
          <input type="radio" name="slider-ez-kidel" id="s1-kidel" />
          <input type="radio" name="slider-ez-kidel" id="s2-kidel" />
          <input type="radio" name="slider-ez-kidel" id="s3-kidel" />
          <input type="radio" name="slider-ez-kidel" id="s4-kidel" />
          <input type="radio" name="slider-ez-kidel" id="s5-kidel" />
          <label htmlFor="s1-kidel" id="slide-1-kidel"></label>
          <label htmlFor="s2-kidel" id="slide-2-kidel"></label>
          <label htmlFor="s3-kidel" id="slide-3-kidel"></label>
          <label htmlFor="s4-kidel" id="slide-4-kidel"></label>
          <label htmlFor="s5-kidel" id="slide-5-kidel"></label>
        </section>
      </div>
    </div>
  );
}
