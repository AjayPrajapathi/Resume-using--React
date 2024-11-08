import React from "react";
import "./style.css"; // Import your CSS file
import LeftSection from "../component/leftSection";
import RightSection from "../component/rightSection";
import data from "../data.json";

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="header-section">
        <h1>{data.name}</h1>
        <h3 style={{ marginTop: "-20px" }}>web Developer</h3>
      </div>
      <div className="sections">
        <div className="left-section">
          <LeftSection />
          
        </div>
        <div className="right-section">
          <RightSection />
        </div>
      </div>
    </div>
  );
};

export default Resume;
