import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBarHead from "./Com/NavBarHead";
import NavBar from "./Page/NavBar";
import Home from "./Page/Home";
import About from "./Page/About";
import Shop from "./Page/Sidebar";
import Blog from "./Page/Blog";
import FAQ from "./Page/FAQ";
import Licenses from "./Page/Licenses";
import Privacy_Policy from "./Page/Privacy_Policy";
import P404 from "./Page/P404";
import Contact from "./Page/Contact";
function App (){
   return(
    <BrowserRouter>
      <NavBarHead />
      <NavBar />
      <Routes>
       <Route path = "/" element={<Home />} />
       <Route path = "/about" element={<About />} />
       <Route path = "/shop" element={<Shop />} />
       <Route path = "/blog" element = {<Blog />}  />
       <Route path = "/contact" element={<Contact />} />
       <Route path = "/faq" element={<FAQ />} />
       <Route path = "/licenses" element = {<Licenses />}/>
       <Route path = "/privacypolicy" element = {<Privacy_Policy />} />
       <Route path =  "/p404" element = {<P404 />} />
      </Routes>
    </BrowserRouter>
      
   );
}


export default App; 