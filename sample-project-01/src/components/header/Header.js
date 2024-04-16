import React, { useState, useEffect } from "react";
import "./Header.css";
import headerbg1 from "../../asset/header.jpg";
import { BsMouse } from "react-icons/bs";
import { FaLongArrowAltDown } from "react-icons/fa";
import Coins from "../Coins";
import axios from 'axios'

// import AOS from "aos";
// import "aos/dist/aos.css";

const Header = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //   });
  // }, []);
  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      console.log(response.data[0])
    }).catch((error) => {
      console.log(error)
    })
  }, [])
  
  return (
    <section id="header">
      <div className="container header">
        <div className="header-left" data-aos="fade-right">
          <h1>
            <span>Block Chain Website</span>
            <span>A platform where you can trade</span>
            <span> All coins</span>
          </h1>
         </div>
        <div className="header-right" >
       
          <img className="header-img" src={headerbg1}/>
          
        </div>
      </div>
      <div className="floating-icon">
        <a href="#coinz">
          <p>scroll down</p>
          <FaLongArrowAltDown color="orangered" size={25} className="mouse" />
        </a>
      </div>
     <div className="coinz"></div><Coins coins={coins} />
    </section>
  );
};

export default Header;
