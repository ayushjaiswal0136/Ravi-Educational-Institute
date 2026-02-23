import { motion } from "framer-motion";
import { FaUniversity } from "react-icons/fa";

const universities = [
  "Swami Vivekanand Subharti University, Meerut (UP)",
  "Mangalayatan University, Aligarh (UP)",
  "Vikrant University, Gwalior (MP)",
  "Shubham University, Semra Saiyad (MP)",
  "Sri Satya Sai University of Technology & Medical Sciences, Sehore (MP)",
  "Mansarovar Global University, Sehore (MP)",
  "Suresh Gyan Vihar University, Jaipur (Rajasthan)"
];

export default function University() {
  return (
    <section id="university" className="section university-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>
          Partner <span>Universities</span>
        </h2>
        <p>
          We collaborate with top universities across India to ensure
          priority admissions, verified programs, and fast confirmations.
        </p>
      </motion.div>

      <div className="university-grid">
        {universities.map((name, index) => (
          <motion.div
            key={index}
            className="university-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <FaUniversity />
            <h4>{name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
