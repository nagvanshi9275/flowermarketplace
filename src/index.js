//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import App from "./App";

//import Main from "./Main";

import Home from "./Home";

import About from "./About";

import Flower from "./Flower";

import Detail from "./Detail";

import Buy from "./Buy";

import "./serber"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  
    <BrowserRouter>
      <App />
      

     <Routes>
    
    <Route path="/" element={<Home/>}/>

    <Route path="/flower" element={<Flower/>}/>

    <Route path="/about" element={<About/>}/>

    <Route path="/detail/:id" element={<Detail/>}/>

    <Route path="/buy/:id" element={<Buy/>}/>

   <Route/>


     </Routes>



    </BrowserRouter>
  
);
