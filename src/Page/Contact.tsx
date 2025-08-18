import React from "react";
import "../Style/Contact.css";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import Footer from "./Footer";

const Contact: React.FC = () => {
  return (
    <section className="contact-section">
      {/* Main Container: Form + Image */}
      <div className="contact-container">
        {/* Left Side - Form */}
        <div className="contact-form">
          <p className="form-subtitle">Say Hi, Make Custom Request</p>
          <h2 className="form-title">We would love to hear from you!</h2>

          <form>
            <div className="form-row">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>

            <div className="form-row">
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Subject" />
            </div>

            <textarea placeholder="Your Message" rows={6}></textarea>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="contact-image">
          <img src="/contact.png" alt="Contact Support" />
        </div>
      </div>

      {/* Contact Cards: Appears below Form + Image */}
      <div className="contact-cards-container">
        <div className="contact-card">
          <div className="contact-icon"><FiPhone /></div>
          <h3 className="contact-title">Call Us.</h3>
          <p>+00 123 456 789</p>
       
        </div>

        <div className="contact-card">
          <div className="contact-icon"><FiMail /></div>
          <h3 className="contact-title">Email</h3>
          <p>support@atonal.com</p>
       
        </div>

        <div className="contact-card">
          <div className="contact-icon"><FiMapPin /></div>
          <h3 className="contact-title">Location.</h3>
          <p>Address goes</p>  
        </div>
      </div>

<div className="FooterHom">
        <Footer />
      </div>


    </section>
  );
};

export default Contact;
