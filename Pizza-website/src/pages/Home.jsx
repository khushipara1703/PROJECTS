import React from "react"
import { Link } from "react-router-dom"; 
import BannerImage from "../assets/images/drink.jpg" 
import "../styles/Home.css";

function Home() {
  return (  <div className="home" style={{ backgroundImage: `url(${BannerImage})`}}>   
  <div className="contentContainer"></div>
  <div className ="headerContainer">  
    <h1>Hot Stone Pizzeria </h1>
    <p> A SMILE IN EVERY SLICE!</p>  
    <Link to ="/menu">
    <button>ORDER NOW </button> 
  
    </Link>
  </div>
      
      
    </div> 
  ); 

  
}

export default Home; 

