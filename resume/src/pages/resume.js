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
          <p>Ph : 6309624923</p>
          <p> Gmail:prajapathi6821@gmail.com</p>
          <p>
            <a href={data.linkedIn} className="links">
              LinkedIn
            </a>
          </p>
          <p>
            <a href={data.gitHub} className="links">
              Github
            </a>
          </p>
        </div>
      </div>
      <hr></hr>
      <div>
        <div className="profile-summary">
          <h3 className="main-headings">Profile Summary</h3>
          {/* <hr></hr> */}
          <p>"Passionate MERN stack developer with expertise in React.js, Node.js, MongoDB, and Redux. Experienced in building responsive web applications, implementing RESTful APIs, and using Git for version control. Proven track record of developing diverse projects, including hospital management systems and e-commerce platforms. Eager to contribute to dynamic teams and tackle real-world web development challenges."</p>
        </div>
        <div className="tech-skills">
          <h3 className="main-headings">Technical Skills</h3>
          <ul>
            <li>Frontend: React.js, HTML, CSS, JavaScript, Tailwind CSS</li>
            <li>Backend: Node.js, Express.js</li>
            <li>Database: MongoDB, Mongoose</li>
            <li>Tools: Git, GitHub, JWT, Stripe VS code Editor</li>
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
        <div className="heading"> <strong >Foodie Express   <span className="foodie-living"><a>LIVE</a></span> </strong> <span className="live"><a>GitHub File</a></span> </div>
       
        <p className="foodie-tech">
          <strong>Tech Stack:</strong> MongoDB, Express, React, Node.js, Font
          Awesome, Mongoose, Stripe
        </p>
        <p className="description">
        <strong >Description:</strong> Foodie Express is a food delivery
        application built using the MERN stack. It consists of two panels:</p>
        <ul className="project-ul">
          <li>
            Client Panel: Allows users to browse, add items to the cart, and
            place orders.
          </li>
          <li>
            Admin Panel: Enables admins to manage the menu by adding new items
            to the food list.
          </li>
          <li>
            {" "}
            The application integrates the Stripe payment gateway for secure
            transactions
          </li>
          <li>uses JSON Web Token (JWT) for authentication. </li>
        </ul>
      </div>

      <div className="project-section">
        
        <div className="heading"> <strong >Text to Image Generator &nbsp;&nbsp;&nbsp;&nbsp; <span className="living-tim"><a>LIVE</a></span> </strong> <span className="live"><a>GitHub File</a></span> </div>
        <p className="foodie-tech">
          <strong>Tech Stack:</strong> MongoDB, Express, React, Node.js,
          Mongoose, Tailwind CSS,
        </p>
        <p className="description">
          <strong>Description:</strong> The Text to Image Generator allows users
          to generate images based on provided text.
        </p>
        <ul className="project-ul">
          <li>
            Image Generation: Users input text, and the application uses the
            ClipDrop API to generate relevant images.
          </li>
          <li>
            Real-time Image Display: Generated images are shown immediately
            after the text is submitted.
          </li>
          <li>
            Image Download: Users can download the generated image after it is
            created.
          </li>
          <li>
            User Authentication: JWT is used for user authentication to ensure
            secure access to the application.
          </li>
          <li>
            Responsive Design: The app is designed with Tailwind CSS to ensure a
            responsive and user-friendly interface.
          </li>
        </ul>
      </div>
      <div className="Certification">
          <h3 className="main-headings">Certification</h3>
          <ul className="certification-ul">
          <li><a href="https://certificate.codingninjas.com/view/08cf0a4b6f49e5ad" className="links">React Full Stack Development</a></li>
          <li><a href="">Node.js Full Stack Development</a></li>
          <li><a href="https://certificate.codingninjas.com/view/b8aafb8f0a06672a" className="links">Bootcamp | DSA in Java</a></li>
          </ul>
        </div>
        <div className="education-section">
  <h3 className="main-headings">Education</h3>
  <ul>
    <li>
    <span><strong>Institution:</strong> Brilliant Group of Technical Institution</span>    <br />
      <strong>Btech</strong><span>in ECE</span><br />
      <span>Hyderabad ,Telangana</span>

    
      
    </li>
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
