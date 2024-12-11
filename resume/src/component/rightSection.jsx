import React from "react";
import data from "../data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faCircleUser,
  faGear,
  faGears,
  faProjectDiagram,
  faSuitcase,
  faUserGear,
  faUserGraduate,
  faLanguage,
  faAward,
} from "@fortawesome/free-solid-svg-icons";

export default function RightSection() {
  return (
    <>
      <div className="summary ">
        <h3 className="right-heading" style={{ marginTop: "-1px" }}>
          <FontAwesomeIcon className="icon" icon={faCircleUser} />
          &nbsp; Profile Summary
        </h3>
        <p style={{ textAlign: "justify", paddingRight: "30px" }}>
          {data.profileSummary}
        </p>
      </div>
      {/* <div className="education">
        <h3 className="right-heading">
          {" "}
          <FontAwesomeIcon icon={faUserGraduate} />
          &nbsp;<span className="decoration">Education</span>
        </h3>
        {data.education.map((course, index) => (
          <div key={index}>
            <strong>{course.Institution}</strong>
            <br />

            <strong>{course.name}</strong>
            <p style={{ marginTop: "-1px", color: "ash" }}>{course.location}</p>
          </div>
        ))}
      </div> */}
      <div className="projects">
        <h3 className="right-heading">
          {" "}
          <FontAwesomeIcon icon={faSuitcase} />
          &nbsp;Projects
        </h3>

        {/* {data.projects.map((project) => (
          <div>
            <h4>{project.name}</h4>
            <p style={{ textAlign: "justify",paddingRight:"30px" }}>{project.detail}</p>
          </div>
        ))} */}
        <div style={{ marginBottom: "30px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginRight: "30px",
              marginBottom: "-20px",
            }}
          >
            <h3 style={{ marginBottom: "-7px", marginTop: "-10px" }}>
              Text-to-Image-Generator
            </h3>
            <a href="https://github.com/AjayPrajapathi/AI-Text-to-Image-Generator">
              GITHUB
            </a>
          </div>
          <p style={{ textAlign: "justify", paddingRight: "30px" }}>
            <strong>Tech Stack : </strong>
            <span>MongoDB,Express.js,React,Node.js,JWT,Tailwind CSS</span>
            <br />
            <strong>Purpose :</strong>Converts user-input text into images with
            secure authentication and payment features.
            <br />
            <strong>Features :</strong> <br />
            ---Follows the MVC (Model-View-Controller) pattern for clean and
            modular code organization.
            <br />
           
            ---User authentication using JSON Web Tokens (JWT) for secure access
            <br />
            ---Responsive design and clean UI using Tailwind CSS and Font
            Awesome icons.
            <br />
            ---RESTful API endpoints for client-server communication.
          </p>
        </div>
        
        <div style={{ marginBottom: "30px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginRight: "30px",
              marginBottom: "-20px",
            }}
          >
            <h3 style={{ marginBottom: "-7px", marginTop: "-10px" }}>
              Happy Shopping
            </h3>
            <a href="https://github.com/AjayPrajapathi/AI-Text-to-Image-Generator">
              GITHUB
            </a>
          </div>

          <p style={{ textAlign: "justify", paddingRight: "30px" }}>
            <strong>Tech Stack : </strong>
            <span>React,Node.js,Express.js,MongoDB,JWT</span>
            <br />
            <strong>Purpose :</strong>A full-stack application that allows users
            to browse, add, update, and purchase products, with secure user
            authentication and payment integration.
            <br />
            <strong>Features :</strong> <br />
            ---Built using MVC pattern with RESTful APIs.
            <br />
            ---Product browsing, adding to cart, and purchasing.
            <br />
            ---Advanced search functionality with category, price, and rating
            filters.
            <br /> ---Users can leave reviews and ratings for products they’ve
            purchased.
            <br />
            ---Built using MVC pattern with RESTful APIs.<br/>
           
          </p>
        </div>


        <div style={{ marginBottom: "30px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginRight: "30px",
              marginBottom: "-20px",
            }}
          >
            <h3 style={{ marginBottom: "-7px", marginTop: "-10px" }}>
              Well Care
            </h3>
            <a href="https://github.com/AjayPrajapathi/AI-Text-to-Image-Generator">
              GITHUB
            </a>
          </div>
          <p style={{ textAlign: "justify", paddingRight: "30px" }}>
            <strong>Tech Stack : </strong>
            <span>React,Node.js,Express.js,MongoDB,JWT</span>
            <br />
            <strong>Purpose :</strong>A web application to manage hospital
            operations, including patient records, doctor appointments, and
            billing.
            <br />
            <strong>Features :</strong> <br />
            ---User roles for doctors, patients, and admin with secure login
            (JWT).
            <br />
            ---Patient record management (admission, treatment, and billing).
            <br />
            ---Doctor appointment scheduling and patient tracking.
            <br />
            ---Built using MVC pattern with RESTful APIs.
            <br />
            Reduce paper Works and patient can easily track their status
            regarding appointments, bills and availability of doctors
            <br/>
            <br/>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;-----------------Thank You-------------------
          </p>
        </div>

        {/* <div>
      
          <h3 className="left-heading" style={{marginBottom:"-2px"}}>
            <FontAwesomeIcon icon={faAward} />
            &nbsp;Certification
          </h3>
         <a>React | FullStack Development</a><br/>
         <a>Node.Js| FullStack Development</a><br/>
         <a>DSA In JAVA</a>
       
      </div> */}
        {/* <div>
          <h3 className="left-heading">
            <FontAwesomeIcon icon={faLanguage} />
            &nbsp;Languages
          </h3>
          <p>
            English <br /> Hindi <br />
            Telugu
          </p>
        </div> */}
      </div>
    </>
  );
}
