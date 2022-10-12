import React from "react";
import ContactInfo from "../components/ContactInfo";
import { Panel } from "rsuite";
import ContactQueryForm from "../components/ContactQueryForm";

const Card = (props) => (
  <Panel {...props} bordered header="Contact Info">
    <div>
      <ul style={{ listStyleType: "none" }}>
        <li>
          <b>Business Owner:</b> Santosh Tarte
        </li>
        <li>
          <b>Role:</b> Head Cinematoghrapher
        </li>
        <li>
          <b>Contact Number:</b> +91-9175581667
        </li>
        <li>
          <b>Email Id:</b> santoshtarte18@gmail.com
        </li>
        <li>
          <b>Address:</b>
          shop 7, Kothari Complex, Guru Gobind Singh Ji Rd, Nai Abaadi, Vishnu
          Nagar, Nanded, Maharashtra 431604
        </li>
      </ul>
    </div>
  </Panel>
);

function ContactUs() {
  return (
    <div style={{ margin: "5%" }}>
      <Card />
      <ContactQueryForm />
    </div>
  );
}

export default ContactUs;
