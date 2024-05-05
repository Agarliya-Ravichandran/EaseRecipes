import React , {useState} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./App.scss";
import Navbar from "./components/Navbar";
import "./components/Navbar.css";
import Section1 from "./components/about/section-1";
import Features from "./components/about/features";
import "./about.css"


function DashBoard(){

    return (
      <div>
        <Router>
          

          <div>
            <Section1/>
          </div>

          <div>
            <Features/>
          </div>

       

          
        </Router>
      </div>
    );
}

export default DashBoard;
