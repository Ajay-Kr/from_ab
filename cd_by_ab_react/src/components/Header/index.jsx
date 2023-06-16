import React, { useState, useEffect } from "react";

import logo from 'assets/logo.png'
import './header.css';

const Header = () => {
  const [navColor, setnavColor] = useState("transparent");
  const [navTop, setnavTop] = useState("");
  const [imgSize, setimgSize] = useState('90%');
  const [navPos, setnavPos] = useState("relative");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("rgba(0, 0, 0, .7)") : setnavColor("transparent");
    window.scrollY > 10 ? setnavTop("0") : setnavTop("");
    window.scrollY > 10 ? setimgSize("70%") : setimgSize("90%");
    window.scrollY > 10 ? setnavPos("fixed") : setnavPos("relative");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <header className='header'>
      <nav
        style={{
          position: navPos,
          backgroundColor: navColor,
          top: navTop,
          transition: "all 1s"
        }}
      >
        <div className="logo-div">
          <img src={logo} alt="" 
            style={{
              height: imgSize
            }}
          />
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Project</li>
          <li>Skills</li>
          <li>Contact </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header