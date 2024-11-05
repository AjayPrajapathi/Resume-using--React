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
  faAward,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import data from "../data.json";

export default function LeftSection() {
  return (
    <>
      <div>
        <ul>
          <h2 className="section heading">
            <FontAwesomeIcon icon={faContactCard} />
            &nbsp;Contact Info
          </h2>
          {/* <hr style={{ borderTop: '2px solid black', boxShadow: '0 3px 0 black', margin: '20px auto', width: '95%' }} /> */}
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
      </div>
      <div>
        <ul>
          <h2 className="section heading">
            <FontAwesomeIcon icon={faLink} />
            &nbsp;Professional Links
          </h2>
          <li>
            <a href={data.linkedIn}>LinkedIn</a>
          </li>
          <li>
            <a href={data.gitHub}>Github</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <h2 className="section heading">
            <FontAwesomeIcon className="icon" icon={faGears} />
            &nbsp; Technical Skills
          </h2>
          {data.Technicalskills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          <h3 className="section heading">
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
          <h2 className="section heading">
            <FontAwesomeIcon icon={faAward} />
            &nbsp;Certification
          </h2>
          {data.certification.map((certificate, index) => (
            <li key={index}>{certificate}</li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          <h2 className="section heading">
            <FontAwesomeIcon icon={faLanguage} />
            &nbsp;Languages
          </h2>
          {data.languages.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
