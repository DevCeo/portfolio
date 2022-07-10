import React from "react";
import "./About.css";
import dev from "../../assets/dev.jpeg";
import { FaAward } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { VscFolderLibrary } from "react-icons/vsc";
import { AiFillCalendar, AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { BsGeoAltFill } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h4>About</h4>
      <h2 style={{ marginBottom: "130px" }}>Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="div about_me-img">
            <img src={dev} alt="about" style={{ height: "100%" }} />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <CgProfile className="about_icon" />
              <h3>Name</h3>
              <h4>정수창</h4>
            </article>
            <article className="about_card">
              <AiFillCalendar className="about_icon" />
              <h3>Birth</h3>
              <h4>95.01.04</h4>
            </article>
            <article className="about_card">
              <AiFillPhone className="about_icon" />
              <h3>Phone</h3>
              <h4>010-7596-7809</h4>
            </article>
            <article className="about_card">
              <BsGeoAltFill className="about_icon" />
              <h3>Address</h3>
              <h4>서울특별시 서대문구</h4>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h3>Experience</h3>
              <h4>1+Years</h4>
            </article>
            <article className="about_card">
              <AiOutlineMail className="about_icon" />
              <h3>Email</h3>
              <h4>tnckddl2468@gmail.com</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
