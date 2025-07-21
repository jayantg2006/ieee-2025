import React from "react";
import "./loading.css";
import image from "/logo.png";

export default function Loading() {
  return (
    <div className="loader-container">
      <img
        src={image}
        alt="IEEE Logo"
        className="logo-img"
        style={{
          animation:
            "slideUp 2s ease-in-out forwards, moveSide 1s ease-in-out 2.2s forwards",
        }}
      />
      <h1
        className="loader-text"
        style={{
          animation:
            "fadeInText 1.8s ease-out 0.7s forwards, exitUp 0.8s ease-in 3s forwards",
        }}
      >
        <span>IEEE</span> NSUT
      </h1>
    </div>
  );
}
