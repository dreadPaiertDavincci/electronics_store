import type { ReactNode } from "react";
import "../Style/Blog.css";
import { Link } from "react-router";
import BlogCard from "../Com/BlogCard";
import Footer from "./Footer";

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
      BLI: (
        <Link id="BlogLinCar" to={"#"}>
          Essential Eccessories You Absolutely Need
        </Link>
      ),
    },
    {
      ImageB: "../../src/BlogImages/BL2.jpg",
      BTI: "Eddie Adams June 1, 2023",
      BLI: (
        <Link id="BlogLinCar" to={"#"}>
          Stylish Laptop Accessories for Every Taste
        </Link>
      ),
    },
    {
      ImageB: "../../src/BlogImages/BL3.jpg",
      BTI: "Draygon May 15, 2023",
      BLI: (
        <Link id="BlogLinCar" to={"#"}>
          The Future of Tech Explori the Latest Electronic
        </Link>
      ),
    },
    {
      ImageB: "../../src/BlogImages/BL4.jpg",
      BTI: "Anny Adams May 13, 2023",
      BLI: (
        <Link id="BlogLinCar" to={"#"}>
          Circuitry Chronicles Tales from the World
        </Link>
      ),
    },
    {
      ImageB: "../../src/BlogImages/BL5.jpg",
      BTI: "Anny Adams May 11, 2023",
      BLI: (
        <Link id="BlogLinCar" to={"#"}>
          Tech Talk: Insights and Ana on the Latest Electronic
        </Link>
      ),
    },
    {
      ImageB: "../../src/BlogImages/BL6.jpg",
      BTI: "Anny Adams May 9, 2023",
      BLI: (
        <Link id="BlogLinCar" to={"#"}>
          Electronics Evolution Trac the Progress of Techy
        </Link>
      ),
    },
  ];
  const LoopBlogCard = BlogCardsArr.map((elemnet, index) => {
    return (
      <BlogCard
        key={index}
        BlogIamge={elemnet.ImageB}
        BlogTiitle={elemnet.BTI}
        BlogLink={elemnet.BLI}
      />
    );
  });
  return (
    <section className="BlogSection">
      <div className="BlogContinar">
        <div className="BlogHeadTitle">
          <h1 id="blogIdTitle">News & Updates</h1>
          <p id="BlogIdPara">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolo.
          </p>
        </div>

        <div className="BlogCardCon">
          <div className="CBL">{LoopBlogCard}</div>
        </div>
      </div>

      <div className="BlogFooter">
        <Footer />
      </div>
    </section>
  );
}
export default Blog;
