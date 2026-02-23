import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaUniversity,
  FaBalanceScale,
  FaLaptopCode,
  FaFlask,
  FaUserGraduate,
  FaBook,
  FaBriefcaseMedical,
  FaFire,
  FaPalette,
  FaHotel,
  FaLeaf,
  FaNewspaper,
  FaDumbbell,
  FaOm
} from "react-icons/fa";

const faculties = [
  { name: "NTT, Bombay Art, Yoga Courses", icon: <FaChalkboardTeacher /> },
  { name: "Faculty of Arts", icon: <FaBook /> },
  { name: "Faculty of Commerce", icon: <FaUniversity /> },
  { name: "Faculty of Science", icon: <FaFlask /> },
  { name: "Faculty of Pharmacy", icon: <FaBriefcaseMedical /> },
  { name: "Faculty of Management", icon: <FaUserGraduate /> },
  { name: "Faculty of Engineering", icon: <FaLaptopCode /> },
  { name: "Faculty of Law", icon: <FaBalanceScale /> },
  { name: "Computer Science & Application", icon: <FaLaptopCode /> },
  { name: "Library & Information Science", icon: <FaBook /> },
  { name: "Faculty of Education", icon: <FaChalkboardTeacher /> },
  { name: "Physical Education", icon: <FaDumbbell /> },
  { name: "Agriculture Science & Technology", icon: <FaLeaf /> },
  { name: "Journalism & Mass Communication", icon: <FaNewspaper /> },
  { name: "Fire Safety & Hazard Management", icon: <FaFire /> },
  { name: "Fashion & Animation", icon: <FaPalette /> },
  { name: "Hotel Management", icon: <FaHotel /> },
  { name: "Paramedical Science", icon: <FaBriefcaseMedical /> },
  { name: "Faculty of Yoga", icon: <FaOm /> },
  { name: "Doctor of Philosophy (Ph.D.)", icon: <FaUserGraduate /> }
];

export default function Faculty() {
  return (
    <section id="faculty" className="section faculty-section">
      {/* HEADER */}
      <motion.div
        className="faculty-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>
          Our <span>Faculties</span>
        </h2>
        <p>
          Diverse academic streams designed to support students across all
          disciplines, career goals, and learning modes.
        </p>
      </motion.div>

      {/* FACULTY GRID */}
      <div className="faculty-grid">
        {faculties.map((item, index) => (
          <motion.div
            key={index}
            className="faculty-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <div className="faculty-icon">{item.icon}</div>
            <h4>{item.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
