import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <motion.nav
      className="navbar baselayer-navbar"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* LEFT: LOGO + NAME */}
      <div className="nav-left">
        <img src={logo} alt="Ravi Educational Institute" className="nav-logo" />
        <span className="brand-name">Ravi Educational Institute</span>
      </div>

      {/* CENTER: SAME CONTENT */}
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#faculty">Faculty</a>
        <a href="#university">University</a>
        <a href="#colleges">Colleges</a>
        <a href="#courses">Courses</a>
        <a href="#contact">Contact Us</a>
      </div>

      {/* RIGHT */}
      <Link to="/get-started" className="nav-cta">
      Get Started
      </Link>
    </motion.nav>
  );
}
