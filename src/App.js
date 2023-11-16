import React from "react";

import "./styles.css";

//import Main from "./Main";

import { Link } from "react-router-dom";

export default function APP() {
  return (
    <div className="body">
      <div className="nav">
        <Link to="/" className="home">
        главная
        </Link>

        <Link to="/flower" className="flower">
        цветок
        </Link>

        <Link to="/about" className="about">
        О нас
        </Link>
      </div>
    </div>
  );
}
























































