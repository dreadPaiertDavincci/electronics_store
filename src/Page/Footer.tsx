import SocialMedia from "../Com/SocialMedia";
import { Link, useLocation } from "react-router-dom";

import "../Style/Footer.css"; 
function Footer(){ 
    const ResorceList:string[] = ["Home" , "Blog" , "About Us" , "Contact Us"];
    const compnay:string[] = [""]; 
    return(
        <footer className="footerSction"> 
           <div className="FooterCon">
                <div className="TitleConFooter">
                    <h2 id="TitleFooter">ELECTRONICS</h2>
                    <div className="ParagraphCon">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum deserunt eos 
                        similique reprehenderit nihil provident odit minus omnis! 
                        Eligendi quidem quis sint velit minus! Culpa maxime hic maiores laudantium quisquam?
                    </div>
                    <div className="Sci">
                        <SocialMedia />
                    </div>
                    
                </div>

                <div className="ResoursesCon">
                    <h3 id="RL">Resorces</h3>
                    <ul className="ResorceList">

                    </ul>
                </div>

                <div className="CompanyCont">
                    <h3 id="RL">Company</h3>
                    <ul className="CompanyList">

                    </ul>
                </div>

                 <div className="TopProductsList">
                    <h3 id="RL">Top Products</h3>
                    <ul className="ProductList">

                    </ul>
                </div>
           </div>
           <div className="VirticalLine"></div>
    
        </footer>
    );
}
export default Footer;