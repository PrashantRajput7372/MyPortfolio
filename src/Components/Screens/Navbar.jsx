import React, { useState } from "react";
import "../CssFiles/Navbar.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { Link } from "react-scroll";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false); 
  }

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
          <Link to = "hero" smooth={true} duration={700} className="navbar-link">Home</Link>
          <Link to = "experience" smooth={true} duration={700} className="navbar-link">Experience</Link>
          <Link to = "projects" smooth={true} duration={700} className="navbar-link">Project</Link>
          <Link to = "about" smooth={true} duration={700} className="navbar-link">About</Link>
          <Link to = "contact" smooth={true} duration={700} className="navbar-link">Contact Me</Link>
        </motion.div>

        {/* Dropdown Nav Links (mobile) */}
        <div className={`dropdown-links ${menuOpen ? "open" : ""}`}>
           <Link to = "hero" smooth={true} duration={700} className="navbar-link" onClick={()=>handleNavClick()}>Home</Link>
          <Link to = "experience" smooth={true} duration={700} className="navbar-link" onClick={()=>handleNavClick()}>Experience</Link>
          <Link to = "projects" smooth={true} duration={700} className="navbar-link" onClick={()=>handleNavClick()}>Project</Link>
          <Link to = "about" smooth={true} duration={700} className="navbar-link" onClick={()=>handleNavClick()}>About</Link>
          <Link to = "contact" smooth={true} duration={700} className="navbar-link" onClick={()=>handleNavClick()}>Contact Me</Link>
        </div>
      </motion.div>
      <div className="navbar-divider"></div>
    </>
  );
}

export default Navbar;
