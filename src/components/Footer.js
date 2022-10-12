import React from "react";
import Footer from "rsuite/Footer";
import logo from "../assets/karma-logo.png";
import { Grid, Row, Col, Divider } from "rsuite";
import googlestore from "../assets/mobile-store/google-trans.png";
import applestore from "../assets/mobile-store/apple.png";
import youtube from "../assets/icons/youtube.svg";
import gmail from "../assets/icons/gmail.svg";
import instagram from "../assets/icons/instagram.svg";
import whatsapp from "../assets/icons/whatsapp.svg";

function FooterBar() {
  const date = new Date();

  return (
    <Footer style={{ width: "100%", overflow: "hidden" }}>
      <Grid fluid>
        <Row gutter={16} className="show-grid">
          <Col xs={5} style={{ margin: "5px 20px 5px 20px" }}>
            <h6 className="show-col">Products</h6>
            <div className="show-col">Traditional</div>
            <div className="show-col">Candid</div>
            <div className="show-col">3D</div>
            <div className="show-col">Wooden</div>
            <div className="show-col">Matte Finish</div>
            <div className="show-col">Linen Cover</div>
            <div className="show-col">Italian Leather</div>
          </Col>
          <Col xs={5} style={{ margin: "5px 20px 5px 20px" }}>
            <h6 className="show-col">Our Work</h6>
            <div className="show-col">Pre-Wedding Shoot</div>
            <div className="show-col">Wedding Shoot</div>
            <div className="show-col">Maternity Shoot</div>
            <div className="show-col">Baby-Shower Shoot </div>
            <div className="show-col">Birthday Event Shoot</div>
            <div className="show-col">Portfolio Shoot</div>
            <div className="show-col">Modelling Shoot</div>
            <div className="show-col">Candid Shoot</div>
            <div className="show-col">Cinematography</div>
          </Col>
          <Col xs={5} style={{ margin: "5px 20px 5px 20px" }}>
            <h6 className="show-col">Company</h6>
            <div className="show-col">About Us</div>
            <div className="show-col">Careers</div>
            <div className="show-col">Our Partners</div>
            <div className="show-col">Contact Us</div>
          </Col>
          <Col xs={5} style={{ margin: "5px 20px 5px 20px" }}>
            <h6 className="show-col">Connect</h6>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <a
                href="https://www.youtube.com/channel/UCJlVnZps3yWKP7QbBPAagbQ"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={youtube}
                  alt="youtube-logo"
                  style={{ width: "35px", height: "35px", marginTop: "20px" }}
                />
              </a>
              <a
                href="mailto:santoshtarte18@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={gmail}
                  alt="gmail-logo"
                  style={{ width: "35px", height: "35px", marginTop: "20px" }}
                />
              </a>
              <a
                href="https://www.instagram.com/santosh_tarte_photography/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={instagram}
                  alt="instagram-logo"
                  style={{ width: "35px", height: "35px", marginTop: "20px" }}
                />
              </a>
              <a
                href="https://wa.me/919175581667?text="
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={whatsapp}
                  alt="whatsapp-logo"
                  style={{ width: "35px", height: "35px", marginTop: "20px" }}
                />
              </a>
            </div>
          </Col>
        </Row>
        <Divider />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <img src={logo} className="App-logo show-col" alt="logo" />
            <h4 className="show-col">Karma Productions</h4>
          </div>
          <div>
            <p className="show-col">
              Copyright © {date.getFullYear()} Karma Productions Inc. All Rights
              Reserved.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <img
              src={googlestore}
              className="google-logo"
              alt="google-store-logo"
            />
            <img
              src={applestore}
              className="apple-logo"
              alt="apple-store-logo"
            />
          </div>
        </div>
        <Divider />
      </Grid>
    </Footer>
  );
}

export default FooterBar;

// Youtube
// Instagram
// Mail
// Whatsapp
