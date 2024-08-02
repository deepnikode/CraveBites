import React from "react";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Footer component for footer section

const Footer = () => {
  return (
    <div className="flex flex-col w-full text-white items-center justify-center py-5 bg-[#02060c]">
      <p className="mt-3 justify-between">Created with 💖 by Deep Nikode</p>
      <div className="my-3 flex items-center justify-center">
        <a
          className="ml-3 text-4xl transition-all hover:text-linkedIn"
          href="https://www.linkedin.com/in/deepnikode"
          target="_blank"
          title="Deep Nikode's Linkedin Profile">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          className="ml-3 text-4xl transition-all hover:text-github"
          href="https://github.com/deepnikode"
          target="_blank"
          title="Deep Nikode's GitHub repo">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <p className="pb-10" title="Just Kiddin' There is no Copyright for this">
        ©️ 2024 CraveBites
      </p>
    </div>
  );
};

export default Footer;
