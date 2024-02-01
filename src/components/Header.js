/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ResumePDF from "../assets/Resume1.pdf";
import Image from "../assets/Logo.jpg";
const Header = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = ResumePDF;
    link.download = "Manoj_Biswal_Resume.pdf";
    link.click();
  };
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="#">
            <img src={Image} alt="Logo" className="h-13 w-10 rounded-full" />
          </a>

          {/* button */}
          <button className="btn btn-sm" onClick={downloadResume}>
            Explore My Resume
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
