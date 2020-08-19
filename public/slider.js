const slideData = [
  {
    index: 0,
    src:
      "https://firebasestorage.googleapis.com/v0/b/ez-health.appspot.com/o/features%2Ffoods.png?alt=media&token=772948d1-f4aa-41e7-ba65-0392901d866c",
  },

  {
    index: 1,
    src:
      "https://firebasestorage.googleapis.com/v0/b/ez-health.appspot.com/o/features%2Frest.png?alt=media&token=594f2897-9bdc-42b0-a31b-deab92449747",
  },

  {
    index: 2,
    src:
      "https://firebasestorage.googleapis.com/v0/b/ez-health.appspot.com/o/features%2Ffitness.png?alt=media&token=42c11f50-479f-4b1b-820a-4474987592e7",
  },
  {
    index: 3,
    src:
      "https://firebasestorage.googleapis.com/v0/b/ez-health.appspot.com/o/features%2Fchallenges.png?alt=media&token=d546e7da-aa56-4d96-b084-c646d92068ca",
  },
  {
    index: 4,
    src:
      "https://firebasestorage.googleapis.com/v0/b/ez-health.appspot.com/o/features%2Fmeditation.png?alt=media&token=43f663dd-0479-408d-8df9-d85b07bd7b1e",
  },
  {
    index: 5,
    src:
      "https://firebasestorage.googleapis.com/v0/b/ez-health.appspot.com/o/features%2Fsleepysounds.png?alt=media&token=22f4b190-428f-4991-af2b-2e11863a8e8f",
  },
];

// =========================
// Slide
// =========================

class Slide extends React.Component {
  constructor(props) {
    super(props);

    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleSlideClick = this.handleSlideClick.bind(this);
    this.imageLoaded = this.imageLoaded.bind(this);
    this.slide = React.createRef();
  }

  handleMouseMove(event) {
    const el = this.slide.current;
    const r = el.getBoundingClientRect();

    el.style.setProperty(
      "--x",
      event.clientX - (r.left + Math.floor(r.width / 2))
    );
    el.style.setProperty(
      "--y",
      event.clientY - (r.top + Math.floor(r.height / 2))
    );
  }

  handleMouseLeave(event) {
    this.slide.current.style.setProperty("--x", 0);
    this.slide.current.style.setProperty("--y", 0);
  }

  handleSlideClick(event) {
    this.props.handleSlideClick(this.props.slide.index);
  }

  imageLoaded(event) {
    event.target.style.opacity = 1;
  }

  render() {
    const { src, button, headline, index } = this.props.slide;
    const current = this.props.current;
    let classNames = "slide";

    if (current === index) classNames += " slide--current";
    else if (current - 1 === index) classNames += " slide--previous";
    else if (current + 1 === index) classNames += " slide--next";

    return React.createElement(
      "li",
      {
        ref: this.slide,
        className: classNames,
        onClick: this.handleSlideClick,
        onMouseMove: this.handleMouseMove,
        onMouseLeave: this.handleMouseLeave,
      },

      React.createElement(
        "div",
        { className: "slide__image-wrapper" },
        React.createElement("img", {
          className: "slide__image",
          alt: headline,
          src: src,
          onLoad: this.imageLoaded,
        })
      ),

      React.createElement(
        "article",
        { className: "slide__content" },
        React.createElement("h2", { className: "slide__headline" }, headline)
      )
    );
  }
}

// =========================
// Slider control
// =========================

const SliderControl = ({ type, title, handleClick }) => {
  return React.createElement(
    "button",
    { className: `btn btn--${type}`, title: title, onClick: handleClick },
    React.createElement(
      "svg",
      { className: "icon", viewBox: "0 0 24 24" },
      React.createElement("path", {
        d: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",
      })
    )
  );
};

// =========================
// Slider
// =========================

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = { current: 0 };
    this.handlePreviousClick = this.handlePreviousClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleSlideClick = this.handleSlideClick.bind(this);
  }

  handlePreviousClick() {
    const previous = this.state.current - 1;

    this.setState({
      current: previous < 0 ? this.props.slides.length - 1 : previous,
    });
  }

  handleNextClick() {
    const next = this.state.current + 1;

    this.setState({
      current: next === this.props.slides.length ? 0 : next,
    });
  }

  handleSlideClick(index) {
    if (this.state.current !== index) {
      this.setState({
        current: index,
      });
    }
  }

  render() {
    const { current, direction } = this.state;
    const { slides, heading } = this.props;
    const headingId = `slider-heading__${heading
      .replace(/\s+/g, "-")
      .toLowerCase()}`;
    const wrapperTransform = {
      transform: `translateX(-${current * (100 / slides.length)}%)`,
    };

    return React.createElement(
      "div",
      { className: "slider", "aria-labelledby": headingId },
      React.createElement(
        "ul",
        { className: "slider__wrapper", style: wrapperTransform },
        React.createElement(
          "h3",
          { id: headingId, class: "visuallyhidden" },
          heading
        ),

        slides.map((slide) => {
          return React.createElement(Slide, {
            key: slide.index,
            slide: slide,
            current: current,
            handleSlideClick: this.handleSlideClick,
          });
        })
      ),

      React.createElement(
        "div",
        { className: "slider__controls" },
        React.createElement(SliderControl, {
          type: "previous",
          title: "Go to previous slide",
          handleClick: this.handlePreviousClick,
        }),

        React.createElement(SliderControl, {
          type: "next",
          title: "Go to next slide",
          handleClick: this.handleNextClick,
        })
      )
    );
  }
}

ReactDOM.render(
  React.createElement(Slider, { heading: "Example Slider", slides: slideData }),
  document.getElementById("slider")
);
