import { FaUniversity } from "react-icons/fa";

export default function Courses() {

  return (

    <section id="courses" className="section">

      <h2>Courses</h2>

      <div className="college-grid">

        <div className="college-card">
          <FaUniversity className="college-icon"/>
          <h4>Regular</h4>
          <p className="college-type">
            BTech || BCA || BSc || LLB || BEd || MEd
          </p>
        </div>

        <div className="college-card">
          <FaUniversity className="college-icon"/>
          <h4>Online</h4>
          <p className="college-type">
            MBA || MCA || BBA || PGDCA
          </p>
        </div>

        <div className="college-card">
          <FaUniversity className="college-icon"/>
          <h4>ODL</h4>
          <p className="college-type">
            BA || MA || MCom || MBA || BLIB
          </p>
        </div>

      </div>

    </section>

  );

}