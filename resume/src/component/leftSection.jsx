import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faContactBook,
  faContactCard,
  faCode,
  faCodeBranch,
  faCodeCommit,
  faGears,
  faLanguage,
  faLocation,
  faLocationPin,
  faLocationPinLock,
  faLocationArrow,
  faMapLocation,
  faPhone,
  faPhoneAlt,
  faAutomobile,
  faPhoneSlash,
  faVoicemail,
  faMailBulk,
  faMailForward,
  faMailReply,
  faEnvelope,
  faCertificate,
  faUserGraduate,
  faAward,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import data from "../data.json";

export default function LeftSection() {
  return (
    <>
      {/* <div>
        <ul>
          <h3 className="left-heading"  style={{marginTop:"-5px"}}>
            <FontAwesomeIcon icon={faContactCard} />
            &nbsp;Contact Info
          </h3>

          <li>
            <FontAwesomeIcon icon={faLocation} />
            &nbsp;Hyderabad,Telangana
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} />
            &nbsp;{data.mobileNo}
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            &nbsp;{data.email}
          </li>
        </ul>
      </div> */}
      <div>
        <ul>
          <h3 className="left-heading">
            <FontAwesomeIcon icon={faLink} />
            &nbsp;Professional Links
          </h3>
          <li>
            <a href={data.linkedIn} className="links"> LinkedIn</a>
          </li>
          <li>
            <a href={data.gitHub} className="links">Github</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <h3 className="left-heading">
            <FontAwesomeIcon className="icon" icon={faGears} />
            &nbsp; Technical Skills
          </h3>
          {data.Technicalskills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          <h3 className="left-heading">
            <FontAwesomeIcon className="icon" icon={faGears} />
            &nbsp; Soft Skills
          </h3>
          {data.softSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          <h3 className="left-heading">
            <FontAwesomeIcon icon={faAward} />
            &nbsp;Certification
          </h3>
          {/* {data.certification.map((certificate, index) => (
            <li key={index}>{certificate}</li>
          ))} */}
          <li><a href="https://certificate.codingninjas.com/view/08cf0a4b6f49e5ad" className="links">React Full Stack Development</a></li>
          <li><a href="">Node.js Full Stack Development</a></li>
          <li><a href="https://certificate.codingninjas.com/view/b8aafb8f0a06672a" className="links">Bootcamp | DSA in Java</a></li>
        </ul>
      </div>
      {/* <div>
        <ul>
          <h3 className="left-heading">
            <FontAwesomeIcon icon={faLanguage} />
            &nbsp;Languages
          </h3>
          {data.languages.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </div> */}
      <div>
        <ul>
          <h3 className="left-heading">
            {" "}
            <FontAwesomeIcon icon={faUserGraduate} />
            &nbsp;<span className="decoration">Education</span>
          </h3>
          {/* {data.education.map((course, index) => (
            <div key={index}>
              <strong>{course.Institution}</strong>
              <br />

              <strong>{course.name}</strong>
              <p style={{ marginTop: "-1px", color: "ash" }}>
                {course.location}
              </p>
            </div>
          ))} */}
          <p><strong>Sri Chaitanya Junior Collage</strong><br/>Intermediate<br/><b>MPC</b><br/>Hyderabad-Telangana</p>
          <p>Brilliant Institute Of Engineering And Technology<br/><b>B-Tech</b><br/>Electronics And Communication Engineering<br/>Hyderabad-Telangana</p>
           
        </ul>
      </div>
       <div>
        <ul>
          <h3 className="left-heading">
            <FontAwesomeIcon icon={faLanguage} />
            &nbsp;Languages
          </h3>
          {data.languages.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
