import React from "react";
import HomeCarousel from "../components/HomeCarousel";
import HomeQuote from "../components/HomeQuote";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <div style={{ margin: "10%" }}>
        <HomeQuote />
      </div>
      <HomeCarousel />
    </div>
  );
}

export default Home;
