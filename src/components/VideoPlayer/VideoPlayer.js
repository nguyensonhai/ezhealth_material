import React from "react";
import ReactPlayer from "react-player";
import "assets/css/components/videoPlayerStyle.css";
export default function VideoPlayer(props) {
  const { src, bgColor } = props;
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={src}
        width="100%"
        height="100%"
        controls={true}
        loop={false}
        style={{ backgroundColor: bgColor }}
      />
    </div>
  );
}
