import type { ReactNode } from "react";
import "../Style/Licenes.css";
import { Link } from "react-router";
import Footer from "./Footer";
function Licenses() {
  type REC1DATATYPE = {
    REImage: ReactNode;
    RETitl: string;
  };
  const REC1DATA: REC1DATATYPE[] = [
    {
      REImage: <i id="LiIC" className="bxr  bx-images"></i>,
      RETitl: "Image",
    },
    {
      REImage: <i id="LiIC" className="bxr  bx-star"></i>,
      RETitl: "Icons",
    },
    {
      REImage: <i id="LiIC" className="bxr  bx-file-heart"></i>,
      RETitl: "Fonts",
    },
  ];

  const REC1DATALoop = REC1DATA.map((element, index) => {
    return (
      <div className="REC1" key={index}>
        <div className="ICLİS">{element.REImage}</div>
        <div className="TitleLİSA">{element.RETitl}</div>
      </div>
    );
  });

  return (
    <>
    <section className="SectionContinar">
      <div className="LisContinar">
        <div className="RectangleCon">{REC1DATALoop}</div>
        <div className="lefLisanCon">
          <div className="REC2">
            <p id="LisLeft">
              All graphical assets in this template are licensed for personal
              and commercial use. If you'd like to use a specific asset, please
              check the license below. All images sourced from
              <Link to={"#"}>Unsplash, Freepik </Link>and{" "}
              <Link to={"#"}>Pexels</Link>
            </p>
          </div>
          <div className="REC2">
            <p id="LisLeft">
              We've used <Link to={"#"}>SVG icon </Link>for this template
            </p>
          </div>
          <div className="REC2">
             <p id="LisLeft">
              Orting template use <Link to={"#"}>Open Sans</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
         <div className="LisFooter">
             <Footer />
         </div>

    </>
  );
}
export default Licenses;
