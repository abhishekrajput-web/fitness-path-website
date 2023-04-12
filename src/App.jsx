import React, { useState, useEffect } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
// IMPORT PAGE COMPONENTS
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Error from "./components/Error";
import NavbarTop from "./components/NavbarTop";
import SectionHeading from "./components/SectionHeading";
// IMPORT BOOTSTRAP AND STYLE LINK
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
    {loading ? ( <h1 style={{fontSize:"60px",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh"}}>Loading...</h1> ) : (
      <BrowserRouter>
      <GlobalStyle/>
      <NavbarTop/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/reviews" element={<Reviews/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    ) }
    </>

  )
}

export default App;
