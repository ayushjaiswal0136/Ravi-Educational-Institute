import { motion } from "framer-motion";
import { FaUserCheck, FaUniversity, FaCheckCircle } from "react-icons/fa";
import heroImg from "../assets/hero-students.png";

export default function Hero() {
  return (
    <section id="home" className="hero-startup">
      {/* BACKGROUND IMAGE */}
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>

      <div className="hero-content">
        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Guaranteed Admissions.<br />
          <span>One Form.</span> Multiple Universities.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Ravi Educational Institute simplifies higher education admissions
          across Regular, Online, Distance & ODL modes through direct
          university tie-ups and expert counseling.
        </motion.p>

        {/* PROCESS CARDS */}
        <div className="hero-process">
          <motion.div
            className="process-card"
            whileHover={{ scale: 1.05 }}
          >
            <FaUserCheck />
            <h4>Fill One Form</h4>
            <p>Share basic details once</p>
          </motion.div>

          <motion.div
            className="process-card"
            whileHover={{ scale: 1.05 }}
          >
            <FaUniversity />
            <h4>Expert Guidance</h4>
            <p>Universities & eligibility matched</p>
          </motion.div>

          <motion.div
            className="process-card"
            whileHover={{ scale: 1.05 }}
          >
            <FaCheckCircle />
            <h4>Secure Admission</h4>
            <p>Fast confirmation via tie-ups</p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="hero-cta-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a href="/get-started" className="hero-main-btn">
            Get Started
          </a>
          <span className="hero-stats">
            ⭐ 98% Admission Success Rate
          </span>
        </motion.div>
      </div>
    </section>
  );
}
