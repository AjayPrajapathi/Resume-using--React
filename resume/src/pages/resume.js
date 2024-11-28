import React from "react";
import "./style.css"; // Import your CSS file
import LeftSection from "../component/leftSection";
import RightSection from "../component/rightSection";
import data from "../data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPhone,faEnvelope,faLocation}from "@fortawesome/free-solid-svg-icons";
const Resume = () => {
  return (
    <div className="resume-container">
      <div className="header-section">
        <h2>{data.name}</h2>
        <div style={{display:"flex",justifyContent:"space-around",marginTop:"-20px"}}> <h3>
            <FontAwesomeIcon icon={faLocation} />
            &nbsp;Hyderabad,Telangana
          </h3>  <h3>
            <FontAwesomeIcon icon={faPhone} />
            &nbsp;{data.mobileNo}
          </h3>
          <h3>
            <FontAwesomeIcon icon={faEnvelope} />
            &nbsp;{data.email}
          </h3></div>
        {/* <h3 style={{ marginTop: "-20px" }}>web Developer</h3> */}
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
