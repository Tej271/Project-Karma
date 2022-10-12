import React from "react";
// import emailjs from "@emailjs/browser";

function PlanCards() {
  // const sendEmail = (e) => {
  //   console.log("Mail Data", e);
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "gmailidsanto",
  //       "template_akurz9q",
  //       form.current,
  //       "8h87nu23f_NU7TvVM"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  return (
    <div class="w-table">
      <div class="w-table-cell">
        <div class="w-container">
          <div class="w-card color-violet">
            <div class="card-header">
              <div class="w-title">Basic</div>
              <div class="w-price">{"\u20B9"}41,000</div>
              <div class="container-button">
                <a
                  class="w-button"
                  onClick={() => {
                    window.alert("Order Sent for Confirmation");
                    // sendEmail();
                  }}
                >
                  Book Now
                </a>
              </div>
            </div>
            <div class="card-content">
              <div class="w-item">
                <span>30 </span>Sheets
              </div>
              <div class="w-item">
                <span>Videoshoot </span>Transitional
              </div>
              <div class="w-item">
                <span>Full HD</span> + Pendrive
              </div>
              <div class="w-item">
                <span>Highlights</span> Video
              </div>
            </div>
          </div>
          <div class="w-card color-green">
            <div class="card-header">
              <span
                style={{
                  position: "absolute",
                  backgroundColor: "pink",
                  rotate: "45",
                  fontSize: 12,
                  marginLeft: "5%",
                }}
              >
                Recommended
              </span>
              <div class="w-title">Candid</div>
              <div class="w-price">{"\u20B9"}61,000</div>
              <div class="container-button">
                <a
                  class="w-button"
                  onClick={() => {
                    window.alert("Order Sent for Confirmation");
                    // sendEmail();
                  }}
                >
                  Book Now
                </a>
              </div>
            </div>
            <div class="card-content">
              <div class="w-item">
                <span>30 </span>Sheets
              </div>
              <div class="w-item">
                <span>Videoshoot </span>Transitional
              </div>
              <div class="w-item">
                <span>Full HD</span> + Pendrive
              </div>
              <div class="w-item">
                <span>Highlights</span> Video
              </div>
              <div class="w-item">
                <span>12x24 </span>Candid Album
              </div>
              <div class="w-item">
                <span>15 </span>Sheets + Soft Copies
              </div>
            </div>
          </div>
          <div class="w-card color-blue">
            <div class="card-header">
              <div class="w-title">Candid & Cinematic</div>
              <div class="w-price">{"\u20B9"}1,10,000</div>
              <div class="container-button">
                <a
                  class="w-button"
                  onClick={() => {
                    window.alert("Order Sent for Confirmation");
                    // sendEmail();
                  }}
                >
                  Book Now
                </a>
              </div>
            </div>
            <div class="card-content">
              <div class="w-item">
                <span>60 </span>Sheets
              </div>
              <div class="w-item">
                <span>Videoshoot </span>Transitional
              </div>
              <div class="w-item">
                <span>Full HD</span> + Pendrive
              </div>
              <div class="w-item">
                <span>Cinematic </span> Video
              </div>
              <div class="w-item">
                <span>12x24 </span>Candid Album
              </div>
              <div class="w-item">
                <span>15 </span>Sheets + Soft Copies
              </div>

              <div class="w-item">
                <span>Event</span> Teaser
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanCards;
