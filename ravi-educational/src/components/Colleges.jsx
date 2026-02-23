import { FaUniversity } from "react-icons/fa";

export default function Colleges() {

  return (

    <section id="colleges" className="section">

      <h2>Colleges</h2>

      <div className="college-grid">

        <div className="college-card">
          <FaUniversity className="college-icon"/>
          <h4>National Institute of Open Schooling (NIOS)</h4>
          <p className="college-type">Open Schooling • 10th & 12th</p>
        </div>

        <div className="college-card">
          <FaUniversity className="college-icon"/>
          <h4>Board of Open Schooling & Skill Education (BOSSE)</h4>
          <p className="college-type">Open Schooling • 10th & 12th</p>
        </div>

        <div className="college-card">
          <FaUniversity className="college-icon"/>
          <h4>FiT Group of Institutions</h4>
          <p className="college-type">Diploma • Graduation • PG</p>
        </div>

      </div>

    </section>

  );

}