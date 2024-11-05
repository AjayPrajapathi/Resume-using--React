import React from "react";
import data from "../data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faCircleUser, faGear, faGears, faProjectDiagram, faSuitcase, faUserGear, faUserGraduate } from "@fortawesome/free-solid-svg-icons";

export default function RightSection() {
  return (
    <>
      <div className="summary">
        <h2 className="section heading">
     
          <FontAwesomeIcon className="icon" icon={faCircleUser} />&nbsp;
          Profile Summary
        </h2>
        <p style={{ textAlign: "justify",paddingRight:'30px' }}>{data.profileSummary}</p>
      </div>
      <div className="education">
        <h2 className="section heading"> <FontAwesomeIcon icon={faUserGraduate}/>&nbsp;Education</h2>
        {data.education.map((course, index) => (
          <div className="" key={index}>
            <strong>{course.Institution}</strong><br/>
            
            <strong>{course.name}</strong>
            <p style={{marginTop:"-1px",color:"ash"}}>{course.location}</p>
          </div>
        ))}
      </div>
      <div className="projects">
        <h2 className="section heading"> <FontAwesomeIcon icon={faSuitcase}/>&nbsp;Projects</h2>

        {data.projects.map((project) => (
          <div>
            <h4>{project.name}</h4>
            <p style={{ textAlign: "justify",paddingRight:"30px" }}>{project.detail}</p>
          </div>
        ))}
      </div>
    </>
  );
}
