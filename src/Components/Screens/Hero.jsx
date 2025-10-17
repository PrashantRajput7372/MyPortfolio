import React from "react";
import "../CssFiles/Hero.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

function Hero() {
  const isMoblie = window.innerWidth <= 800;

   const designation  = `< Frontend Developer />`;
   const desarr = designation.split("");
   console.log(desarr);

   const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({opacity: 1, y: 0, transition: { delay: i * 0.2 } })};


  return (
    <>
      <section id = "hero">
      <div className="hero-container">
        <div className="hero-text">
          <motion.h1
            className="main-title"
            initial={{ scale:isMoblie?0.5:0.7, opacity: 0.5 }}
            animate={{
              x: 0,
              opacity: 1,
              scale: isMoblie?1.1:1.5,
              transition: { duration: 2 },
            }}
          >
            Rendering Hello, I am Prashant Singh!
          </motion.h1>
          <motion.h2 className="highlight font-bold"
          initial={{  opacity: 0.5, scale: 0.2 }}
          animate={{
                     x: 0,
                    opacity: 1,
                    scale: isMoblie?1:1.5,
                    transition: { duration: 1.5 }
                  }}
          >{desarr.map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={letterAnimation}
            >{char}</motion.span>
          ))
          }
          </motion.h2>
          <p>
            I create responsive and visually appealing web applications using
            React and CSS.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Hire Me</button>
            <a
              href="/PrashantKumarSinghResume.pdf"
              download
              className="btn-secondary"
            >
              📄 Download CV
            </a>
          </div>
        </div>
        <motion.div className="hero-image"
        initial={{ x: '150vw' }}
          animate={{
            x:0,
            transition: { duration: 1.5 }
            }} 
        >
          <img src="/portfolioimage.png" alt="Portfolio" />
        </motion.div>
      </div>
      </section>
    </>
  );
}

export default Hero;
