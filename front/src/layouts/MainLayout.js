import "./MainLayout.css"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

// Notre layout prend un paramêtre particulier ({children})
// En sois il parsera nos pages à l'interieur du children
export default function MainLayout ({ children }) {
  const [pages] = useState([
    {id :0 , name: 'scorer', label: "Buteur"},
    {id:1, name: 'assist' ,label : "Passeur"}
  ])
  
  return (
    <div className="MainLayout">
      <Navbar list= {pages} />
        { children }
      <Footer />
    </div>
  );
};