import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html{
    font-size: 62.5%;
}

html,body{
    overflow-x: hidden;
    height: 100%;
    width: 100%;
    font-family: 'Overpass', sans-serif;
    background-color: #000;
}

.container{
    width: 90%;
    max-width:1200px;
    margin: auto;
}

.section-container{
    display: grid;
    align-items: center; 
    grid-template-columns: 1fr 1fr;
}

.common-section-container{
    gap: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

li{
    list-style: none;
}

a{
    text-decoration: none;
}

.section-heading{
    font-size: 3rem;
    text-align: center;
    color: #000;
    border-bottom: 2px solid blue;
}

.scroll-btn{
    position: fixed;
    bottom: 5px;
    right: 20px;
    z-index: 99;
    border: none;
    outline: none;
    background: #fff;
    font-size: 2.3rem;
    color:darkcyan;
    cursor: pointer;
    padding: 15px;
    border-radius: 50%;
  }

  .scroll-btn:hover{
    color: white;
  }



  @media screen and (max-width:700px) {
    .section-container{
        display: grid;
        align-items: center; 
        grid-template-columns: 1fr;
        justify-content: center;
    }
  }


@media screen and (max-width:305px) {
    html{
        font-size: 50%;
    }
    
  }


`;

export default GlobalStyle;