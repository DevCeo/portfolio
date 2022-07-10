import React from "react";
import "./Head.css";
import DEV from "../../assets/code.png";
import Socials from "./Socials";

const Head = () => {
  return (
    <header>
      <div className="container head_container">
        <h3>안녕하세요.</h3>
        <h2>성장하는 개발자 정수창입니다.</h2>
        <h5 className="text-light">Front-End Developer</h5>
        <Socials />

        <div className="my_photo">
          <img src={DEV} alt="dev" />
        </div>
        {/* <div style={{ marginTop: "20px" }}>
          <h4>안녕하세요.</h4>
          <h4>끊임없이 공부하는 Front-End 개발자입니다.</h4>
          <h4>매우 꼼꼼하고 포기를 모르는 것이 저의 장점입니다.</h4>
        </div> */}

        <a href="#projects" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Head;
