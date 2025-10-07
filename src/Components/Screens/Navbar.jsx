import React, { useState } from "react";
import "../CssFiles/Navbar.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.div
        className="navbar"
        initial={{ y: -100 }}
        animate={{
          y: 0,
          transition: { type: "spring", stiffness: 150, damping: 12 },
        }}
      >
        {/* Logo */}
        <div className="navbar-logo">
          <img src="/logop.png" alt="portfolio logo" />
        </div>

        {/* Menu Button (visible on small screens only) */}
        <div
          className="menu-button"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </div>

        {/* Normal Nav Links (visible on large screens) */}
        <motion.div
          className="navbar-links"
          initial={{ y: -100 }}
          animate={{
            y: 0,
            transition: {
              type: "spring",
              stiffness: 150,
              delay: 0.8,
              damping: 12,
            },
          }}
        >
          <div className="navbar-link">Home</div>
          <div className="navbar-link">Experience</div>
          <div className="navbar-link">Project</div>
          <div className="navbar-link">About</div>
          <div className="navbar-link">Contact Me</div>
        </motion.div>

        {/* Dropdown Nav Links (mobile) */}
        <div className={`dropdown-links ${menuOpen ? "open" : ""}`}>
          <div className="navbar-link">Home</div>
          <div className="navbar-link">Experience</div>
          <div className="navbar-link">Project</div>
          <div className="navbar-link">About</div>
          <div className="navbar-link">Contact Me</div>
        </div>
      </motion.div>
      <div className="navbar-divider"></div>
    </>
  );
}

export default Navbar;
