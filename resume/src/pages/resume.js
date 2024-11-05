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

        <sub>-----New Hafeezpet,Kondapur,RangaReddy Dist,Telangana,India-500049</sub>
        {/* <hr style={{ borderTop: '2px solid black', margin: '20px auto', width: '90%' }} /> */}
        {/* <hr
          style={{
            borderTop: "2px solid black",
            boxShadow: "0 3px 0 black",
            margin: "20px auto",
            width: "95%",

          }}
        /> */}
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
