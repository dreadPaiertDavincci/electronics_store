import { useEffect, useRef, type ReactNode } from "react";
import "../Style/Blog.css";
import { Link } from "react-router";
import BlogCard from "../Com/BlogCard";
import Footer from "./Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Blog() {
  type BDType = {
    ImageB: string;
    BTI: string;
    BLI: ReactNode;
  };

  const BlogCardsArr: BDType[] = [
    {
      ImageB: "../../src/BlogImages/BL1.jpg",
      BTI: "Anny Adams June 1, 2023",
      BLI: <Link id="BlogLinCar" to={"#"}>Essential Eccessories You Absolutely Need</Link>,
    },
    {
      ImageB: "../../src/BlogImages/BL2.jpg",
      BTI: "Eddie Adams June 1, 2023",
      BLI: <Link id="BlogLinCar" to={"#"}>Stylish Laptop Accessories for Every Taste</Link>,
    },
    {
      ImageB: "../../src/BlogImages/BL3.jpg",
      BTI: "Draygon May 15, 2023",
      BLI: <Link id="BlogLinCar" to={"#"}>The Future of Tech Explori the Latest Electronic</Link>,
    },
    {
      ImageB: "../../src/BlogImages/BL4.jpg",
      BTI: "Anny Adams May 13, 2023",
      BLI: <Link id="BlogLinCar" to={"#"}>Circuitry Chronicles Tales from the World</Link>,
    },
    {
      ImageB: "../../src/BlogImages/BL5.jpg",
      BTI: "Anny Adams May 11, 2023",
      BLI: <Link id="BlogLinCar" to={"#"}>Tech Talk: Insights and Ana on the Latest Electronic</Link>,
    },
    {
      ImageB: "../../src/BlogImages/BL6.jpg",
      BTI: "Anny Adams May 9, 2023",
      BLI: <Link id="BlogLinCar" to={"#"}>Electronics Evolution Trac the Progress of Techy</Link>,
    },
  ];

  const LoopBlogCard = BlogCardsArr.map((element, index) => (
    <BlogCard
      key={index}
      BlogIamge={element.ImageB}
      BlogTiitle={element.BTI}
      BlogLink={element.BLI}
      className="BlogCard"
    />
  ));

  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header Text Animation
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current.querySelectorAll("h1, p"),
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
        }
      );
    }

    // Blog Cards Animation
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll(".BlogCard");
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
            start: "top 80%",
          },
        }
      );
    }

    // Footer Animation
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          },
        }
      );
    }
  }, []);

  return (
    <section className="BlogSection">
      <div className="BlogContinar" ref={headerRef}>
        <div className="BlogHeadTitle">
          <h1 id="blogIdTitle">News & Updates</h1>
          <p id="BlogIdPara">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolo.
          </p>
        </div>

        <div className="BlogCardCon">
          <div className="CBL" ref={cardsRef}>
            {LoopBlogCard}
          </div>
        </div>
      </div>

      <div className="BlogFooter" ref={footerRef}>
        <Footer />
      </div>
    </section>
  );
}

export default Blog;
