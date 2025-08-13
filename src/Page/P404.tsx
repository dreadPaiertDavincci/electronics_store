import "../Style/404.css";
import Footer from "./Footer";
function P404() {
  return <section className="P404Section">
    <div className="ImageContinar">
         <img src="../../src/P404.png" id="ImageNot" alt="P404" />
    </div>
    <div className="P404Title">
        <h1 id="NotH1Tit">Page Not Found</h1>
        <p id="ParaNot">The page you are looking for doesn't exist or has been moved</p>
    </div>
    <Footer />
  </section>;
}
export default P404;
