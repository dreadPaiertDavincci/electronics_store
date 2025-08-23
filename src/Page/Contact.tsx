import React, { useState, type ChangeEvent, type FormEvent, useEffect, useRef } from "react";
import "../Style/Contact.css";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import Footer from "./Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface contactData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [contact, setContact] = useState<contactData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChang = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handlesubmit = (e: FormEvent) => {
    e.preventDefault();
    const { firstName, lastName, email, subject, message } = contact;
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      alert("Contact Field Error !!");
      return;
    }
    setContact({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const formRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Form Animation
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
          },
        }
      );
    }

    // Image Animation
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
          },
        }
      );
    }

    // Cards Animation
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll(".contact-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <section className="contact-section">
      <div className="contact-container" style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
        <div className="contact-form" ref={formRef} style={{ flex: "1 1 400px" }}>
          <p className="form-subtitle">Say Hi, Make Custom Request</p>
          <h2 className="form-title">We would love to hear from you!</h2>

          <form className="contactForm" onSubmit={handlesubmit}>
            <div className="form-row">
              <input
                onChange={handleChang}
                name="firstName"
                value={contact.firstName}
                id="COID"
                type="text"
                placeholder="First Name"
              />
              <input
                onChange={handleChang}
                name="lastName"
                value={contact.lastName}
                id="COID"
                type="text"
                placeholder="Last Name"
              />
            </div>

            <div className="form-row">
              <input
                onChange={handleChang}
                name="email"
                value={contact.email}
                id="COID"
                type="email"
                placeholder="Email"
              />
              <input
                onChange={handleChang}
                name="subject"
                value={contact.subject}
                id="COID"
                type="text"
                placeholder="Subject"
              />
            </div>
            <textarea
              onChange={handleChang}
              name="message"
              value={contact.message}
              id="COIDt"
              placeholder="Your Message"
              rows={6}
            ></textarea>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>

        <div className="contact-image" ref={imageRef} style={{ flex: "1 1 400px", display: "flex", justifyContent: "center" }}>
          <img src="/contact.png" alt="Contact Support" style={{ maxWidth: "100%", height: "auto" }} />
        </div>
      </div>

      <div className="contact-cards-container" ref={cardsRef} style={{ display: "flex", gap: "2rem", justifyContent: "center", marginTop: "3rem" }}>
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

      <div className="contactFooter">
        <Footer />
      </div>
    </section>
  );
};

export default Contact;
