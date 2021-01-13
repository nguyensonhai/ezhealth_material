import React from "react";
import "assets/css/views/loadingStyle.css";

export default function Loading() {
  return (
    <div>
      <div className="loading-body">
        <h1 className="loading-title">Loading</h1>
        <div className="rainbow-marker-loader"></div>
      </div>
    </div>
  );
}
