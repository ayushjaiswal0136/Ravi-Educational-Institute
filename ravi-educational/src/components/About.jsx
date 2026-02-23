import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaUniversity,
  FaClipboardCheck,
  FaHandshake,
} from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="section about-creative">
      {/* TOP */}
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="about-tag">About Us</span>
        <h2>
          Empowering Students with <span>Guaranteed Admissions</span>
        </h2>
        <p>
          Ravi Educational Institute helps students unlock the right higher
          education opportunities through expert counseling, university
          tie-ups, and a seamless admission process across all learning modes.
        </p>
      </motion.div>

      {/* CONTENT */}
      <div className="about-grid">
        {/* LEFT STORY */}
        <motion.div
          className="about-story"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Who We Are</h3>
          <p>
            With over <strong>10+ years of experience</strong>, we specialize in
            simplifying admissions for Regular, Online, Distance & ODL programs.
            Our direct partnerships with universities ensure priority access,
            faster processing, and transparent guidance.
          </p>

          <p>
            One form. One conversation. One confirmed seat.
            That’s our promise.
          </p>
          <div className="about-gap-image">
            <img src="/about-illustration.png" alt="Student illustration" />
          </div>
        </motion.div>

        {/* RIGHT HIGHLIGHTS */}
        <motion.div
          className="about-cards"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="about-card">
            <FaClipboardCheck />
            <h4>Single-Form Enrollment</h4>
            <p>Apply once to multiple universities</p>
          </div>

          <div className="about-card">
            <FaUniversity />
            <h4>University Tie-Ups</h4>
            <p>Direct access to approved institutions</p>
          </div>

          <div className="about-card">
            <FaUserGraduate />
            <h4>Expert Counseling</h4>
            <p>Personalized guidance for every student</p>
          </div>

          <div className="about-card">
            <FaHandshake />
            <h4>Guaranteed Admission</h4>
            <p>98% success rate across all modes</p>
          </div>
        </motion.div>
      </div>

      {/* STATS */}
      <motion.div
        className="about-stats"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div>
          <h3>10+</h3>
          <p>Years Experience</p>
        </div>
        <div>
          <h3>2000+</h3>
          <p>Students Guided</p>
        </div>
        <div>
          <h3>98%</h3>
          <p>Admission Success</p>
        </div>
      </motion.div>
    </section>
  );
}
