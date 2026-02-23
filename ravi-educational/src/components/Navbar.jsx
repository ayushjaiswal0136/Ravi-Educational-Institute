import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <motion.nav
      className="navbar baselayer-navbar"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >

      {/* LEFT */}
      <div className="nav-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <span className="brand-name">Ravi Educational Institute</span>
      </div>


      {/* DESKTOP LINKS */}
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#faculty">Faculty</a>
        <a href="#university">University</a>
        <a href="#colleges">Colleges</a>
        <a href="#courses">Courses</a>
        <a href="#contact">Contact</a>
      </div>


      {/* CTA */}
      <Link to="/get-started" className="nav-cta">
        Get Started
      </Link>


      {/* HAMBURGER */}
      <div className="mobile-menu-btn" onClick={()=>setOpen(!open)}>
        ☰
      </div>


      {/* MOBILE SLIDE MENU */}
      <div className={open ? "mobile-menu show" : "mobile-menu"}>

        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#faculty" onClick={closeMenu}>Faculty</a>
        <a href="#university" onClick={closeMenu}>University</a>
        <a href="#colleges" onClick={closeMenu}>Colleges</a>
        <a href="#courses" onClick={closeMenu}>Courses</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>

        <Link to="/get-started" onClick={closeMenu}>
          Get Started
        </Link>

      </div>

    </motion.nav>
  );
}