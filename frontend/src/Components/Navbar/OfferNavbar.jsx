
import React from "react";
import "./OfferNavbar.css";
import { RxCross1 } from "react-icons/rx";

const OfferNavbar = () => {

    const closeOfferNav = () => {
        let v = document.getElementById("offerDiv");
        if (v.style.display === "none") {
           v.style.display = "block";
        } else {
           v.style.display = "none";
        }
    }

  return (
    <div className="OfferNavbar" id="offerDiv">
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyItems: "center",
          alignItems: "center",
          marginLeft: "10%",
          letterSpacing: " initial",
        }}
      >
        <div>
          <img
            width={"35px"}
            src="https://media6.ppl-media.com/mediafiles/ecomm/home/1543587824_logo.png"
            alt="img"
          />
        </div>
        <div>
          <p>⭐️⭐️ FLAT Rs. 100 OFF on your first order! ⭐️⭐️</p>
        </div>
        <div className="appfirst">
          Use Code:<span id="offerCode">APPFIRST</span>
        </div>
      </div>
      <div id="comboDown">
        <div className="downloadapp">
          <button>DOWNLOAD APP</button>
        </div>
        <div id="cross" onClick={closeOfferNav}>
          <RxCross1/>
        </div>
      </div>
    </div>
  );
};

export default OfferNavbar;
