import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
function Footer() {
  const data = [
    {
      type: "Make Money With Us",
      subTypes: [
        "Sell On GrabDeal",
        "Sell Under GrabDeal Accelerator",
        "Become An Affiliate",
        "Advertise On GrabDeal",
        "Fulfilment By GrabDeal",
      ],
    },
    {
      type: "Services",
      subTypes: [
        "Home Delivery",
        "Fresh Updates",
        "Live Updates",
        "Become A Member",
        "Homemade Chocolates",
      ],
    },
    {
      type: "Company",
      subTypes: ["About", "Terms", "Privacy Policy", "Careers"],
    },
    {
      type: "More",
      subTypes: ["Your Account", "License", "Create New Account"],
    },
  ];
  const socialLinks = [
    <BsFacebook />,
    <BsInstagram />,
    <BsTwitter />,
    <BsLinkedin />,
  ];
  return (
    <footer className="py-3 mx-3">
      <div className="brand-container">
        <div className="brand">
          <span>GrabDeal</span>
          <span className="dot">.</span>
        </div>
        <p className="description">
          Shop with us to get amazing discouts!!!
        </p>

        <ul className="social-links">
          {socialLinks.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </div>
      <div className="links">
        {data.map(({ type, subTypes }, index) => {
          return (
            <div className="link" key={index}>
              <h3 className="title">{type}</h3>
              <ul>
                {subTypes.map((type, index) => (
                  <li key={index}>
                    <a href="/">{type}</a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </footer>
  );
}

export default Footer;
