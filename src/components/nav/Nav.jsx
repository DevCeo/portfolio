import React, { useState } from "react";
import "./Nav.css";
import { AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import { BiUserPin } from "react-icons/bi";
import { ImStack } from "react-icons/im";

const Nav = () => {
  const [activeMenu, setActiveMenu] = useState("#");

  return (
    <nav>
      <a href="#" onClick={() => setActiveMenu("#")} className={activeMenu === "#" ? "active" : ""}>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => setActiveMenu("#about")} className={activeMenu === "#about" ? "active" : ""}>
        <BiUserPin />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveMenu("#experience")}
        className={activeMenu === "#experience" ? "active" : ""}
      >
        <ImStack />
      </a>
      <a
        href="#projects"
        onClick={() => setActiveMenu("#projects")}
        className={activeMenu === "#projects" ? "active" : ""}
      >
        <AiOutlineProject />
      </a>
    </nav>
  );
};

export default Nav;
