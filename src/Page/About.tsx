import { useEffect } from "react";
import KARCARDS from "../Com/KARCARDS";
import "../Style/About.css";
import Footer from "./Footer";
import gsap from "gsap";

function About() {
  
  useEffect(() => {
    const tl = gsap.timeline();

    // Our Story Section
    tl.fromTo(
      ".UpAbout:first-child .IamgeAbout",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
      .fromTo(
        ".UpAbout:first-child .AboutParagraph",
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.8"
      );

    // Who We Are Section
    tl.fromTo(
      "#AB2 .IamgeAbout",
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
    ).fromTo(
      "#AB2 .AboutParagraph",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.8"
    );

    // KARCARDS Section
    tl.fromTo(
      ".AboutComponant",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Footer
    tl.fromTo(
      ".FooterAbout",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="AboutSection">
      <div className="UpAbout">
        <div className="AboutCo">
          <div className="AboutParagraph">
            <div className="HEDABout">
              <h2 id="ABUYT">Our Story</h2>
              <p id="ParagABO">Where Technology Meets Passion</p>
            </div>
            <div className="PragBodyabou">
              <p id="BPA">
                At Our Story, we believe that technology has the power to create
                meaningful experiences. We're a passionate team of electronics
                who are dedicated to providing high-quality products that
                enhance your everyday life.
              </p>
            </div>
            <div className="PragBodyabou">
              <p id="BPA">
                Our journey began with a shared vision to bridge the gap between
                cutting-edge technology. With this vision in mind, we embarked
                on a mission to redefine the way people interact with
                technology.
              </p>
            </div>
          </div>
          <div className="IamgeAbout">
            <img
              id="AboutImage"
              src="../../public/Logo/ABOUT.png"
              alt="Tahiyati"
            />
          </div>
        </div>
      </div>

      <div id="AB2" className="UpAbout">
        <div className="AboutCo">
          <div className="IamgeAbout">
            <img
              id="AboutImage"
              src="../../public/Logo/ABOUT2.png"
              alt="Tahiyati"
            />
          </div>
          <div className="AboutParagraph">
            <div className="HEDABout">
              <h2 id="ABUYT">Who We Are ?</h2>
              <p id="ParagABO">Electronics Innovators</p>
            </div>
            <div className="PragBodyabou">
              <p id="BPA">
                At Our Story, we are a team of passionate innovators in the
                world of electronics. With a shared love for technology and a
                drive to create exceptional products, we strive to make a
                positive impact on the way people live and interact with the
                world around them.
              </p>
            </div>
            <div className="PragBodyabou">
              <p id="BPA">
                Our journey began with a shared vision to bridge the gap between
                cutting-edge technology. With this vision in mind, we embarked
                on a mission to redefine the way people interact with
                technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="AboutComponant">
        <KARCARDS />
      </div>
      <div className="FooterAbout">
        <Footer />
      </div>
    </section>
  );
}

export default About;
