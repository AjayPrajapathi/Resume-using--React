import React from "react";
import "./style.css"; // Import your CSS file
import LeftSection from "../component/leftSection";
import RightSection from "../component/rightSection";
import data from "../data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
const Resume = () => {
  return (
    <div className="resume">
      <div className="header-section">
        <h2>Ajay Prajapathi</h2>
        <p className="location">Mern Developer from Hyderabad,Telangana</p>
        <div className="header-data">
          <p>
            <strong>Ph No:</strong> 6309624923
          </p>
          <p>
            <strong>Gmail:</strong> prajapathi6821@gmail.com
          </p>
          <p>
            <a href={data.linkedIn} className="links">
              <span className="font-light">LinkedIn</span>
            </a>
          </p>
          <p>
            <a href={data.gitHub} className="links">
              <span className="font-light"> Github</span>
            </a>
          </p>
        </div>
      </div>
      <hr></hr>
      <div>
        <div className="profile-summary">
          <h3 className="main-headings">Profile Summary</h3>
          {/* <hr></hr> */}
          <p>
            Passionate MERN stack developer with expertise in React.js, Node.js,
            MongoDB, and Redux. Experienced in building responsive web
            applications, implementing RESTful APIs, and using Git for version
            control. Proven track record of developing diverse projects,
            including hospital management systems and e-commerce platforms.
            Eager to contribute to dynamic teams and tackle real-world web
            development challenges.
          </p>
        </div>
        <div className="tech-skills">
          <h3 className="main-headings">Technical Skills</h3>
          <ul>
            <li>
              <strong>Frontend:</strong> React.js, HTML, CSS, JavaScript,
              Tailwind CSS
            </li>
            <li>
              <strong>Backend:</strong> Node.js, Express.js
            </li>
            <li>
              <strong>Database:</strong> MongoDB, Mongoose
            </li>
            <li>
              <strong>Tools:</strong> Git, GitHub, VS code Editor
            </li>
          </ul>
        </div>
        <div className="soft-skills ">
          <h3 className="main-headings">Soft Skills</h3>
          <ul className="">
            <li>Teamwork and Collaboration</li>
            <li>Adaptability</li>
            <li>Time Management</li>
          </ul>
        </div>
      </div>
      <div className="foodie-project-section">
        <h3 className="main-headings">Projects</h3>
        <div className="heading">
          <strong>Foodie Express </strong>
          <span className="font-light">
            <a href="https://foodieexpress-clients.onrender.com">Client-LIVE</a>
          </span>
          <span className="font-light">
            <a href="https://foodieexpress-8j9o.onrender.com">Admin-LIVE</a>
          </span>

          <span className="live">
            <a href="https://github.com/AjayPrajapathi/FoodieExpress">
              <span className="font-light"> Github File</span>
            </a>
          </span>
        </div>

        <p className="foodie-tech">
          <strong>Tech Stack:</strong> MongoDB, Express, React, Node.js, Font
          Awesome,JWT, Mongoose, Stripe
        </p>
        <p className="description">
          <strong>Description:</strong> Foodie Express is a food delivery
          application built using the MERN stack. It consists of two panels:
        </p>
        <ul className="project-ul">
          <li>
            <span className="font-light"> Client Panel:</span>
            Allows users to browse, add items to the cart, and place orders.
          </li>
          <li>
            <span className="font-light"> Admin Panel:</span>
            Enables admins to manage the menu by adding new items to the food
            list.
          </li>
          <li>
            {" "}
            <span className="font-light">Payment Integration:</span> Enables
            secure transactions by integrating the Stripe payment gateway.
          </li>
          <li>
            {" "}
            <span className="font-light">Order Tracking:</span> Users can track
            the status of their orders in real time.{" "}
          </li>
        </ul>
      </div>

      <div className="project-section">
        <div className="heading">
          {" "}
          <strong>
            Text to Image Generator &nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <span className="living-tim">
              <a href="https://ai-text-to-image-generator-clients.onrender.com">
                LIVE
              </a>
            </span>
          </strong>
          <span className="live">
            <a href="https://github.com/AjayPrajapathi/AI-Text-to-Image-Generator">
              <span className="font-light"> Github File</span>
            </a>
          </span>{" "}
        </div>
        <p className="foodie-tech">
          <strong>Tech Stack:</strong> MongoDB, Express, React, Node.js,
          Mongoose, Tailwind CSS,JWT.
        </p>
        <p className="description">
          <strong>Description:</strong> The Text to Image Generator allows users
          to generate images based on provided text.
        </p>
        <ul className="project-ul">
          <li>
            <span className="font-light">Image Generation:</span>
            Users input text, and the application uses the ClipDrop API to
            generate relevant images.
          </li>
          <li>
            <span className="font-light"> Real-time Image Display:</span>
            Generated images are shown immediately after the text is submitted.
          </li>
          <li>
            <span className="font-light"> Image Download:</span>
            Users can download the generated image after it is created.
          </li>
          <li>
            <span className="font-light"> User Authentication:</span>
            JWT is used for user authentication to ensure secure access to the
            application.
          </li>
          <li>
            <span className="font-light"> Responsive Design:</span>
            The app is designed with Tailwind CSS to ensure a responsive and
            user-friendly interface.
          </li>
        </ul>
      </div>
      <div className="Certification">
        <h3 className="main-headings">Certification</h3>
        <ul className="certification-ul">
          <li>
            <a
              href="https://certificate.codingninjas.com/view/08cf0a4b6f49e5ad"
              className="links"
            >
              React Full Stack Development
            </a>
          </li>
          <li>
            <a href="">Node.js Full Stack Development</a>
          </li>
          <li>
            <a
              href="https://certificate.codingninjas.com/view/b8aafb8f0a06672a"
              className="links"
            >
              Bootcamp | DSA in Java
            </a>
          </li>
        </ul>
      </div>
      <div className="education-section">
        <h3 className="main-headings">Education</h3>
        <ul>
          <li>
            <span>
              Completed <strong> B.Tech</strong> in Electronics and
              Communication Engineering (ECE) from Brilliant Group of Technical
              Institutions, Hyderabad, Telangana.
            </span>
          </li>
          <li>
            <span>
              Completed <strong>Intermediate</strong> in MPC (Mathematics,
              Physics, and Chemistry) from Sri Chaitanya Junior College.Studied
              in Hyderabad Telangana
            </span>
          </li>
        </ul>
      </div>
      <div className="education-section">
        <h3 className="main-headings">Languages</h3>
        <ul>
          <li>English</li>
          <li>Hindi</li>
          <li>Telugu</li>
        </ul>
      </div>
    </div>

    // <div className="resume-container">
    //   <div className="header-section">
    //     <h2>{data.name}</h2>
    //     <div style={{display:"flex",justifyContent:"space-around",marginTop:"-20px"}}> <h3>
    //         <FontAwesomeIcon icon={faLocation} />
    //         &nbsp;Hyderabad,Telangana
    //       </h3>  <h3>
    //         <FontAwesomeIcon icon={faPhone} />
    //         &nbsp;{data.mobileNo}
    //       </h3>
    //       <h3>
    //         <FontAwesomeIcon icon={faEnvelope} />
    //         &nbsp;{data.email}
    //       </h3></div>

    //   </div>

    //     <div className="left-section">
    //       <LeftSection />

    //     </div>
    //     <div className="right-section">
    //       <RightSection />
    //     </div>

    // </div>
  );
};

export default Resume;
