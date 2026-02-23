import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="section contact-modern">
      {/* HEADER */}
      <div className="contact-header">
        <span className="contact-pill">Contact Us</span>
        <h2>
          Start Your <span>Academic Journey</span> With Us
        </h2>
        <p>
          Have questions about admissions, courses, or universities?
          Our team is here to guide you every step of the way.
        </p>
      </div>

      {/* CONTACT GRID */}
      <div className="contact-grid">
        {/* LEFT CARD */}
        <div className="contact-info-card">
          <a href="tel:7007782178" className="contact-item">
            <FaPhoneAlt />
            <span>Call Us</span>
            <p>7007782178</p>
          </a>

          <a
            href="mailto:ravieducational.instituteftg@gmail.com"
            className="contact-item"
          >
            <FaEnvelope />
            <span>Email Us</span>
            <p>ravieducational.instituteftg@gmail.com</p>
          </a>

          <a
            href="https://wa.me/917007782178"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <FaWhatsapp />
            <span>WhatsApp</span>
            <p>Chat with us instantly</p>
          </a>

          <a
            href="https://maps.google.com/?q=Ravi Educational Institute Fursatganj Sultanpur Road Amethi UP"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <FaMapMarkerAlt />
            <span>Visit Us</span>
            <p>Fursatganj, Sultanpur Road, Amethi, UP</p>
          </a>
        </div>

        {/* RIGHT CARD */}
        <div className="contact-social-card">
          <h3>Connect With Us</h3>
          <p>
            Follow Ravi Educational Institute on social media for updates,
            announcements, and educational insights.
          </p>

          <div className="social-links">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
