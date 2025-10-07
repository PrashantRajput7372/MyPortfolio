import React from "react";
import "../CssFiles/Contact.css";
import { SiGmail } from "react-icons/si";
import { BiLogoGithub } from "react-icons/bi";
import { FaLinkedin, FaInstagram } from "react-icons/fa";


function Contact() {
  return (
    <>
      <section id="contact" className="contact-section">
        <div
          className="container"
          
          initial={{ y: 200 }}
          animate={{
            y: 0,
            transition: { type: "spring", stiffness: 150, damping: 12 },
          }}
        >
          <h2 className="section-title">Contact Me</h2>
          <p className="contact-description">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
          <div className="contact-methods">
            <a
              href="mailto:prashantsingh@113113gmai.com"
              className="contact-link"
            >
              <SiGmail className="icons" />
            </a>
            <a
              href="https://www.linkedin.com/in/prashant-singh-266344196/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaLinkedin className="icons" />
            </a>
            <a
              href="https://github.com/PrashantRajput7372"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <BiLogoGithub className="icons" />
            </a>
            <a
              href="https://www.instagram.com/prashant_rajput732/?next=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaInstagram className="icons" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
