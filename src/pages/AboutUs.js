import React from "react";
import AboutUsTimeline from "../components/AboutUsTimeline";
import AboutUsPara from "../components/AboutUsPara";

function AboutUs() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <AboutUsTimeline />
      <AboutUsPara />
    </div>
  );
}

export default AboutUs;
