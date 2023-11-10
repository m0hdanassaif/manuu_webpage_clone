import React from "react";

import Manuu_logo from "../asset/manuu_logo.jpeg";

import { IoMdArrowDropdown } from "react-icons/io";

const second_navbar = () => {
  return (
    <div className="second_navbar">
      <div className="logo_container">
        <img src={Manuu_logo} alt="MANUU-Logo" />
      </div>
      <div className="links_container">
        <ul>
          <li>Home</li>
          <li>
            About Us <IoMdArrowDropdown />
          </li>
          <li>
            Academics <IoMdArrowDropdown />
          </li>
          <li>
            Administration <IoMdArrowDropdown />
          </li>
          <li>
            Examination <IoMdArrowDropdown />
          </li>
          <li>
            Students <IoMdArrowDropdown />
          </li>
          <li>Notifications</li>
          <li>
            Admission <IoMdArrowDropdown />
          </li>
          <li>Distance Education</li>
        </ul>
      </div>
    </div>
  );
};

export default second_navbar;
