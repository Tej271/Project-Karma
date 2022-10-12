import React, { useRef } from "react";
import { Panel } from "rsuite";
import emailjs from "@emailjs/browser";

function ContactQueryForm() {
  const form = useRef();

  const sendEmail = (e) => {
    console.log("Mail Data", form.current);
    e.preventDefault();

    emailjs
      .sendForm(
        "gmailidsanto",
        "template_akurz9q",
        form.current,
        "8h87nu23f_NU7TvVM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <Panel
        style={{ margin: "2%", marginLeft: "20%", marginRight: "20%" }}
        header="Submit your enquiry"
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
          ref={form}
          onSubmit={sendEmail}
        >
          <label>Name</label>
          <input type="text" name="from_name" />
          <br />
          <label>Email</label>
          <input type="email" name="reply_to" />
          <br />
          <label>Enquiry message</label>
          <textarea name="message" />
          <br />
          <input
            style={{ backgroundColor: "skyblue", color: "black" }}
            type="submit"
            value="Send Enquiry"
          />
        </form>
      </Panel>
    </div>
  );
}

export default ContactQueryForm;
