import FAQTAB from "../Com/FAQTAB";
import "../Style/FAQ.css";
import Footer from "./Footer";

function FAQ() {
  return (
    <section className="FAQSection">
      <div className="FAQContinar">
        <div className="IamgeContinar">
          <img id="FAImaeg" src="../../../FAQIMAGE.webp" alt="tahiyati" />
        </div>
        <div className="TitleCounterContinar">
          <div className="HeadLeft">
            <p id="P1">Our Numbers</p>
            <h2 id="P2">We have impactful numbers</h2>
            <p id="P3">
              Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
              phasellus mollis sit aliquam sit nullam neque ultrices.
            </p>
          </div>

          <div className="CounterContinar"> 
            <div className="BOXCount"> 
               <h1 id="FAPrice">14</h1>
               <p id="PAPRPA">Customer satisfaction</p>
               <p id="FAQPRA">Lorem ipsum dolor sit am et consectet adipiscing.</p>
            </div>
             <div className="BOXCount"> 
                 <h1 id="FAPrice2">8.1</h1>
               <p id="PAPRPA">Monthly active users</p>
               <p id="FAQPRA">Lorem ipsum dolor sit am et consectet adipiscing.</p>
            </div>
             <div className="BOXCount"> 
                <h1 id="FAPrice3">4.8</h1>
               <p id="PAPRPA">Capital raised</p>
               <p id="FAQPRA">Lorem ipsum dolor sit am et consectet adipiscing.</p>
            </div>
             <div className="BOXCount"> 
                 <h1 id="FAPrice">100</h1>
               <p id="PAPRPA">Capital raised</p>
               <p id="FAQPRA">Lorem ipsum dolor sit am et consectet adipiscing.</p>
            </div>
          </div>
        </div>
      </div>
         <div className="QuistionContinar"> 
            <div className="HeaderQuistionContinar">
                <h1 id="Q1">Frequently Asked Questions</h1>
                <p id="Q2">Have questions about Electronicz? Find answers to commonly asked questions below. If you don't see your question listed, feel free to reach out to our friendly customer support team.</p>
            </div>
            <div className="QusTabsCon">
                <FAQTAB />
            </div>
             
        </div>
        <div className="FAQFooter">
            <Footer />
        </div>
    </section>
  );
}
export default FAQ;
