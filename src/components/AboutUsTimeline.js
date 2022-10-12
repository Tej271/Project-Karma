import React from "react";
import { Timeline, Grid, Row, Col } from "rsuite";

const AlignTimeline = ({ align }) => (
  <Timeline align={align}>
    <Timeline.Item>
      <p style={{ fontSize: "15px", color: "darkorchid" }}>March 2019</p>
      <p>Outdoor Freelancing</p>
    </Timeline.Item>
    <Timeline.Item>
      <p style={{ fontSize: "15px", color: "teal" }}>October 2020</p>
      <p>Videography Training</p>
    </Timeline.Item>
    <Timeline.Item>
      <p style={{ fontSize: "15px", color: "tomato" }}>December 2020</p>
      <p>Shivrudra Photo Studio</p>
    </Timeline.Item>
    <Timeline.Item>
      <p style={{ fontSize: "15px", color: "red" }}>April 2021</p>
      <p>2nd branch of shivrudra studio</p>
    </Timeline.Item>
    <Timeline.Item>
      <p style={{ fontSize: "15px", color: "blue" }}>September 2022</p>
      <p>Origin of Karma Productions & Studio</p>
    </Timeline.Item>
  </Timeline>
);

function AboutUsTimeline() {
  return (
    <div style={{ margin: "2%", marginTop: "5%", marginBottom: "5%" }}>
      <AlignTimeline align="alternate" />
    </div>
  );
}

export default AboutUsTimeline;
