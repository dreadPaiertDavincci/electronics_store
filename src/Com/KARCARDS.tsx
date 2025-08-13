import type { ReactNode } from "react";
import "../Style/ComStyle/KARCARD.css";
function KARCARDS(){ 
     type KarType = {
    karImage: ReactNode;
    karH3Titl: string;
    karParagraph: string;
  };
  const karData: KarType[] = [
    {
      karImage: <i className="bxr  bx-truck" id="karIcoID"></i>,
      karH3Titl: "Free Standard Delivery",
      karParagraph:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, est?",
    },
    {
      karImage: <i className="bxr  bx-credit-card-alt" id="karIcoID"></i>,
      karH3Titl: "Safe Payment",
      karParagraph:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, est?",
    },
    {
      karImage: (
        <i className="bxr  bx-message-circle-question-mark" id="karIcoID"></i>
      ),
      karH3Titl: "24/7 Help Center",
      karParagraph:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, est?",
    },
  ];

  const karDateLoop = karData.map((element, index) => {
    return (
      <div className="karCard" key={index}>
        <div className="karImage">{element.karImage}</div>
        <div className="karTextsCon">
          <h3 id="karIdH3">{element.karH3Titl}</h3>
          <p id="karParag">{element.karParagraph}</p>
        </div>
      </div>
    );
  });
    return(
        <div className="PRICECON">{karDateLoop}</div>
    );
}
export  default KARCARDS;
