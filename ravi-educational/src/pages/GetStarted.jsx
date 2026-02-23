import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function GetStarted() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
  "service_0436aob",
  "template_n7hs352",
  e.target,
  "8LQWC-Ir8Yd6c3y_e"
).then(
      () => {
        alert("Message sent successfully!");
        e.target.reset();
      },
      () => {
        alert("Failed to send message.");
      }
    );
  };

  return (
    <section className="section get-started-page">

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get Started
      </motion.h2>

      <motion.form
        className="form neon-form"
        onSubmit={sendEmail}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >

        <div className="form-row">
          <input name="first_name" type="text" placeholder="First Name" required />
          <input name="last_name" type="text" placeholder="Last Name" required />
        </div>

        <div className="form-row">
          <input name="email" type="email" placeholder="Email Address" required />
          <input name="phone" type="tel" placeholder="Phone Number" required />
        </div>

        <select name="subject" required>
          <option value="">Subject</option>
          <option>General Inquiry</option>
          <option>Admission Information</option>
          <option>Course Details</option>
          <option>Fee Structure</option>
          <option>Other</option>
        </select>

        <textarea name="message" placeholder="Your Message" rows="5"></textarea>

        <label className="checkbox">
          <input type="checkbox" required />
          I agree to the processing of my personal data according to the policy
        </label>

        <button type="submit" className="neon-btn">
          Send Message
        </button>

      </motion.form>

    </section>
  );
}