import React from "react";
import "../CssFiles/About.css";
import { motion} from "motion/react";
function About() {
         
    const items = [
      { title: "Experience", value: "4+ Years Working", img :"/work.png" },
      { title: "Completed", value: "20+ Projects" , img:"/complete.png"},
      { title: "Support", value: "Online 24/7", img:"./support.png" },
    ];


  return (
    <section id="about" className="about_section">
      <div className="aparent">
        <h1 className="about_heading">About Me</h1>
        <div className="about_container">
         <img src="/portfolioimage.png" alt="Portfolio"  className="about_img"/>
         <motion.div className="about_data"
            
  initial={{ opacity: 0, x: 200 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ type: "spring", duration: 1.8, bounce: 0.5 }}
  viewport={{ once: false, amount: 0.3 }}
         >
          <div className="aCards">
            {items.map((item, index) => (
              <div className="aCard" key={index}>
                <img src={item.img} alt={item.title} className="aCard_img"/>
                <br/>
                <span style={{fontSize:"1.2rem", fontWeight:900}}>{item.title}</span>
                <br/>
                <span>{item.value}</span>
              </div>
            ))}
            </div>

            <p className="about_desc">
              I am a Frontend Developer with with 4+ years of working experience
              in development. No matter if I am working solo or in a team, I am
              passionate about bringing ideas to life.
            </p>
          
        </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
