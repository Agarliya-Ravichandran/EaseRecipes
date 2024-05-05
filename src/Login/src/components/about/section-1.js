import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './section-1.css';
import ReactDOM from "react-dom";

function Section1(){
  return (
    <div className='new-container'>
      <video src='/videos/video.mp4' autoPlay loop muted />

      <h1 className="website-name">EaseRecipes</h1>
      <h1 className="tagline">Your Ingredients</h1>
      <h1 className="tagline">Our Recipes!</h1>

     </div>
  );
}


export default Section1;
