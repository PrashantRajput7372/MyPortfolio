import React from "react";
import "../CssFiles/Experince.css";

function Experince() {
  return (
    <div>
      <section id="experience" className="experience-section">
        <div className="container">
          <h2 className="section-title">Experience</h2>

          <div className="experience-cards">
            {/* UIDAI Card */}
            <div className="experience-card">
              <h3>Client: UIDAI</h3>
              <p className="company-role">
                Tata Consultancy Services (Frontend Developer)
              </p>

              <ul className="project-list">
                <li>
                  <strong>Address Update Form Redesign:</strong> Integrated
                  Google Translate and Bhashini APIs to provide local language
                  support based on UX designs from Adobe XD.
                </li>
                <li>
                  <strong>Dashboard Tiles:</strong> Revamped dashboard tiles and
                  login interface for better UX.
                </li>
                <li>
                  <strong>Deceased Reporting:</strong> Developed a controlled
                  form with validations and integrated backend APIs for Aadhaar
                  deactivation.
                </li>
              </ul>

              <div className="tech-used">
                <strong>Tech:</strong> React, Adobe XD, REST API, Form
                Validation, Bhashini, Google Translate
              </div>
            </div>

            {/* Verizon Card */}
            <div className="experience-card">
              <h3>Client: Verizon</h3>
              <p className="company-role">
                Tata Consultancy Services (Frontend Developer)
              </p>

              <ul className="project-list">
                <li>
                  <strong>Telecom Dashboard:</strong> Developed a dashboard
                  interface using React for internal tools.
                </li>
                <li>
                  <strong>Accessibility & Performance:</strong> Implemented standards and improved rendering performance.
                </li>
              </ul>

              <div className="tech-used">
                <strong>Tech:</strong> React, HTML5, CSS3, Performance Optimization
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experince;
