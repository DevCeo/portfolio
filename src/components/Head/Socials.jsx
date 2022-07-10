import React from "react";
import { FaGithub } from "react-icons/fa";
import { SiNotion } from "react-icons/si";

const Socials = () => {
  return (
    <div className="head_socials">
      <a href="https://github.com/DevCeo">
        <FaGithub />
      </a>
      <a href="https://candle-oyster-e84.notion.site/Front-End-Developer-3322d747a5d349d88f8eb4b88511fa6b">
        <SiNotion />
      </a>
    </div>
  );
};

export default Socials;
