import React from "react";
import "./Experience.css";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiBootstrap, DiSass, DiReact } from "react-icons/di";
import { IoLogoJavascript, IoLogoNodejs, IoLogoBitbucket } from "react-icons/io";
import { SiThreedotjs, SiRedux, SiElectron, SiExpress, SiMysql, SiMongodb, SiSlack } from "react-icons/si";
import { FaGit, FaSourcetree, FaAws, FaFigma } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience">
      <h4>What i have</h4>
      <h2 style={{ marginBottom: "130px" }}>Skills</h2>

      <div className="container experience_container">
        <div className="experience_front">
          <h3>Frontend</h3>
          <div className="experience_content">
            <article className="experience_detail">
              <AiFillHtml5 className="icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience_detail">
              <DiCss3 className="icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience_detail">
              <IoLogoJavascript className="icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience_detail">
              <DiReact className="icon" />
              <h4>React</h4>
            </article>
            <article className="experience_detail">
              <SiRedux className="icon" />
              <h4>Redux</h4>
            </article>
            <article className="experience_detail">
              <DiSass className="icon" />
              <h4>Sass</h4>
            </article>
            <article className="experience_detail">
              <SiElectron className="icon" />
              <h4>Electron</h4>
            </article>
            <article className="experience_detail">
              <SiThreedotjs className="icon" />
              <h4>Three.js</h4>
            </article>
            <article className="experience_detail">
              <DiBootstrap className="icon" />
              <h4>BootStrap</h4>
            </article>
          </div>
        </div>
        <div className="experience_back">
          <h3>Backend</h3>
          <div className="experience_content_v">
            <article className="experience_detail">
              <IoLogoNodejs className="icon" />
              <h4>Node.js</h4>
            </article>
            <article className="experience_detail">
              <SiExpress className="icon" />
              <h4>Express.js</h4>
            </article>
            <article className="experience_detail">
              <SiMysql className="icon" />
              <h4>MySQL</h4>
            </article>
            <article className="experience_detail">
              <SiMongodb className="icon" />
              <h4>MongoDB</h4>
            </article>
          </div>
        </div>
        <div className="experience_version">
          <h3>Version</h3>
          <div className="experience_content_v">
            <article className="experience_detail">
              <FaGit className="icon" />
              <h4>Git</h4>
            </article>
            <article className="experience_detail">
              <AiFillGithub className="icon" />
              <h4>Github</h4>
            </article>
            <article className="experience_detail">
              <FaSourcetree className="icon" />
              <h4>Sourcetree</h4>
            </article>
            <article className="experience_detail">
              <IoLogoBitbucket className="icon" />
              <h4>Bitbucket</h4>
            </article>
          </div>
        </div>
        <div className="experience_deployment">
          <h3>Deploy</h3>
          <div className="experience_content_v">
            <article className="experience_detail">
              <FaAws className="icon" />
              <h4>AWS</h4>
            </article>
          </div>
        </div>
        <div className="experience_communication">
          <h3>Communication</h3>
          <div className="experience_content_v">
            <article className="experience_detail">
              <FaFigma className="icon" />
              <h4>Figma</h4>
            </article>
            <article className="experience_detail">
              <SiSlack className="icon" />
              <h4>Slack</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
