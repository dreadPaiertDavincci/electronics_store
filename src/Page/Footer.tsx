import SocialMedia from "../Com/SocialMedia";
import { Link } from "react-router-dom";

import "../Style/Footer.css";
function Footer() {
  const ResorceList: string[] = ["Home", "Blog", "About Us", "Contact Us"];
  const compnay: string[] = ["Brand", "Licenes", "FAQ", "404"];
  const TopProduct: string[] = ["Game", "Phone", "Camera", "Laptop"];

  const ResorceListLoop = ResorceList.map((element, index) => {
    return (
      <li key={index}>
        <Link id="LisLink" to={"#"}>
          {element}
        </Link>
      </li>
    );
  });
  const compnayLoop = compnay.map((element, index) => {
    return (
      <li key={index}>
        <Link to={"#"} id="LisLink">
          {element}
        </Link>
      </li>
    );
  });
  const TopProductLoop = TopProduct.map((element, index) => {
    return (
      <li key={index}>
        <Link to={"#"} id="LisLink">
          {element}
        </Link>
      </li>
    );
  });

  return (
    <footer className="footerSction">
      <div className="FooterCon">
        <div className="TitleConFooter">
          <h2 id="TitleFooter">ELECTRONICS</h2>
          <div className="ParagraphCon">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
            deserunt eos similique reprehenderit nihil provident odit minus
            omnis! Eligendi quidem quis sint velit minus! Culpa maxime hic
            maiores laudantium quisquam?
          </div>
          <div className="Sci">
            <SocialMedia />
          </div>
        </div>

        <div className="ResoursesCon">
          <h3 id="RL">Resorces</h3>
          <ul className="ResorceList">{ResorceListLoop}</ul>
        </div>

        <div className="ResoursesCon">
          <h3 id="RL">Company</h3>
          <ul className="ResorceList">{compnayLoop}</ul>
        </div>

        <div className="ResoursesCon">
          <h3 id="RL">Top Products</h3>
          <ul className="Top">{TopProductLoop}</ul>
        </div>
      </div>
      <div className="VirticalLine"></div>

      <div className="FootFooter">
        <div className="CopyRight">
          © 2025 ARDA. All Rights Reserved. Shop smart, shop ARDA.
        </div>
        <div className="TrimsFooter">
          <Link to={"/privacypolicy"} id="TriID">
            Privacy&Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
