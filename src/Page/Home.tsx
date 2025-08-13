import { useEffect, useRef, type ReactNode } from "react";
import "../Style/Home.css";
import { Link } from "react-router";
import TABS from "../Com/TABS";
import Footer from "./Footer";
import KARCARDS from "../Com/KARCARDS";

function Home() {
  type ImageSliderInfoType = {
    Image: string;
    Title: string;
    Description: string;
    seeMoreBtn: ReactNode;
  };

  type CategoryType = {
    ImageCate: string;
    CateTitle: string;
  };

  const CategoryCardInfo: CategoryType[] = [
    {
      ImageCate: "../../src/CategoryImage/CA1.png",
      CateTitle: "Game",
    },
    {
      ImageCate: "../../src/CategoryImage/CA2.png",
      CateTitle: "Screen",
    },
    {
      ImageCate: "../../src/CategoryImage/CA3.png",
      CateTitle: "Phone",
    },
    {
      ImageCate: "../../src/CategoryImage/CA4.png",
      CateTitle: "Airpod",
    },
    {
      ImageCate: "../../src/CategoryImage/CA5.png",
      CateTitle: "Watch",
    },
  ];

  const LoopCategory = CategoryCardInfo.map((element, index) => {
    return (
      <div className="CardCategory" key={index}>
        <div className="ImageCategory">
          <img src={element.ImageCate} id="ImageIDCategory" alt="Tahiyati" />
        </div>
        <Link to={"/Shop"} className="CateLink">
          {element.CateTitle}
        </Link>
      </div>
    );
  });
  const ImageSliderInfo: ImageSliderInfoType[] = [
    {
      Image: "../../src/HomeImage/C1.png",
      Title: "watch",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.",
      seeMoreBtn: <button className="seeMore">SEE MORE &#8599;</button>,
    },
    {
      Image: "../../src/HomeImage/C2.png",
      Title: "Airpod",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.",
      seeMoreBtn: <button className="seeMore">SEE MORE &#8599;</button>,
    },
    {
      Image: "../../src/HomeImage/C3.png",
      Title: "XBOX",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.",
      seeMoreBtn: <button className="seeMore">SEE MORE &#8599;</button>,
    },
    {
      Image: "../../src/HomeImage/C4.png",
      Title: "Iphone",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.",
      seeMoreBtn: <button className="seeMore">SEE MORE &#8599;</button>,
    },
    {
      Image: "../../src/HomeImage/C5.png",
      Title: "Airpod",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.",
      seeMoreBtn: <button className="seeMore">SEE MORE &#8599;</button>,
    },
    {
      Image: "../../src/HomeImage/C6.png",
      Title: "computer screen",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.",
      seeMoreBtn: <button className="seeMore">SEE MORE &#8599;</button>,
    },
  ];
  const carouselRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const carousel = carouselRef.current;
    const listHTML = listRef.current;
    if (!carousel || !listHTML) return;
    const showSlider = (type: "next" | "prev") => {
      carousel.classList.remove("next", "prev");
      const items = listHTML.querySelectorAll(".item");
      if (type === "next") {
        listHTML.appendChild(items[0]);
        carousel.classList.add("next");
      } else {
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add("prev");
      }
    };
    const interval = setInterval(() => {
      showSlider("next");
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const LoopSliderHome = ImageSliderInfo.map((element, index) => {
    return (
      <div className="item" key={index}>
        <img src={element.Image} alt={element.Title} />
        <div className="introduce" key={index}>
          <div className="topic">{element.Title}</div>
          <div className="des">{element.Description}</div>
          {element.seeMoreBtn}
        </div>
      </div>
    );
  });
  return (
    <section className="HomeSection">
      <div className="carousel" ref={carouselRef}>
        <div className="list" ref={listRef}>
          {LoopSliderHome}
        </div>
      </div>

      <div className="CategoryCpntinar">
        <h1 className="CateTitle">Top categories</h1>
        <div className="FlexCArdCAtegory">{LoopCategory}</div>
      </div>

      <div className="TabsCardContinar">
        <TABS />
      </div>

      <KARCARDS />

      <div className="FooterHom">
        <Footer />
      </div>
    </section>
  );
}
export default Home;
