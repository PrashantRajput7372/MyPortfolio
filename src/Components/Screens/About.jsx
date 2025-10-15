import React from "react";
import "../CssFiles/About.css";
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
         <div className="about_data">
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
          
        </div>
        </div>
      </div>
    </section>
  );
}

export default About;
