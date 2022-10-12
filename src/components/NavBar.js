import React from "react";
import { Navbar, Nav } from "rsuite";
import logo from "../assets/karma-logo.png";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const pages = [
    { id: 1, name: "Our Work", path: "our-work" },
    { id: 2, name: "Process", path: "how-it-works" },
    { id: 3, name: "Plans & Pricing", path: "plans-and-pricing" },
    { id: 4, name: "Contact Us", path: "contact-us" },
    { id: 5, name: "About Us", path: "about-us" },
  ];

  const navigate = useNavigate();

  return (
    <Navbar
      className="navbar"
      style={{
        backgroundColor: "rgba(1, 1, 1, 0.9)",
        position: "fixed",
        top: "0",
        width: "100%",
        zIndex: "100",
      }}
    >
      <Navbar.Brand href="/" style={{ marginBottom: "0px" }}>
        <img src={logo} className="App-logo" alt="logo" />
        <span
          style={{
            fontSize: 24,
            color: "white",
            position: "absolute",
            top: "20%",
          }}
        >
          KARMA PRODUCTIONS
        </span>
      </Navbar.Brand>

      <Nav pullRight>
        {pages.map((page) => (
          <Nav.Item
            style={{ fontSize: "16px", color: "white" }}
            key={page.id}
            onClick={() => {
              navigate(page.path);
            }}
          >
            {page.name}
          </Nav.Item>
        ))}
      </Nav>
    </Navbar>
  );
}

export default NavBar;
