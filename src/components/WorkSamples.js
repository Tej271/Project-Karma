import React from "react";
import photo11 from "../assets/img/photo-11.jpg";
import photo12 from "../assets/img/photo-12.jpg";
import photo13 from "../assets/img/photo-13.jpg";
import photo14 from "../assets/img/photo-14.jpg";
import photo15 from "../assets/img/photo-15.jpg";
import { Grid, Row, Col } from "rsuite";

function WorkSamples() {
  return (
    <div
      style={{
        margin: "5%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid fluid style={{ alignItems: "center" }}>
        <Row gutter={16}>
          <Col xs={8}>
            <img
              alt="captured-image1"
              height="auto"
              width="400"
              className="show-col"
              style={{
                border: "2px",
                padding: "8px",
                margin: "8px",
              }}
              src={photo15}
            ></img>
          </Col>
          <Col xs={8}>
            <img
              alt="captured-image2"
              height="auto"
              width="400"
              className="show-col"
              style={{
                border: "2px",
                padding: "8px",
                margin: "8px",
              }}
              src={photo11}
            ></img>
          </Col>
          <Col xs={8}>
            <img
              alt="captured-image3"
              height="auto"
              width="400"
              style={{
                border: "2px",
                padding: "8px",
                margin: "8px",
              }}
              className="show-col"
              src={photo12}
            ></img>{" "}
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <img
              alt="captured-image4"
              height="auto"
              width="400"
              className="show-col"
              style={{
                border: "2px",
                padding: "8px",
                margin: "8px",
              }}
              src={photo13}
            ></img>
          </Col>
          <Col xs={12}>
            <img
              alt="captured-image5"
              height="auto"
              width="400"
              className="show-col"
              style={{
                border: "2px",
                padding: "8px",
                margin: "8px",
              }}
              src={photo14}
            ></img>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default WorkSamples;
