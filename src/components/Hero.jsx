import React from "react";
import styled from "styled-components";
import ButtonOutline from "./ButtonOutline";
import ButtonBg from "../components/ButtonBg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Main>
      <div className="container">

        <div className="section-container mt-5">
          <div className="hero-heading-container">

            <h1 className="hero-heading">make <span className="hero-subheading">your</span> <br />  day  special <br />   anytime</h1>
            <div className="btn-container">
              <Link to="/signup">
                <ButtonOutline>signUp</ButtonOutline>
              </Link>
              <Link to="/login">
                <ButtonBg>logIn</ButtonBg>
              </Link>
            </div>
          </div>
          <div className="hero-image-container">
            <figure>
              <img src="./images/hero.png" alt="hero-img" className="hero-image" />
            </figure>
          </div>
        </div>
      </div>

    </Main>
  )
}


const Main = styled.main`
padding-top: 5rem;

.hero-heading-container .hero-heading{
  font-size:6rem;
  color:#fff;
  font-weight:bold;
  text-transform: uppercase;
}

.hero-subheading{
  color:yellow;
  display: inline;
}

.btn-container{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4rem;
  margin: 3rem 0;
}


@media screen and (max-width:859px) {

.hero-heading-container .hero-heading{
font-size: 5rem;
}


}

@media screen and (max-width:719px) {

  .hero-heading-container .hero-heading{
    font-size: 4rem;
    }


}

@media screen and (max-width:367px) {

.hero-heading-container .hero-heading{
  font-size: 4rem;
}
}


`;

export default Hero;
