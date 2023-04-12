import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Footer = () => {
  return (
    <Div>
      <div className="container">
      <div className="footer-container">
        <div className="about-container">
          <h2 className="about-heading">About Us</h2>
          <p className="about-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, eos!!</p>
        </div>

        <div className="email-container">
          <form action="#">
          <h2 className="email-heading">Subscribe To Our Newsletter</h2>
          <input type="email" placeholder="@123@gmail.com" name="email" autoComplete="off" minLength={7} />
          <input type="button" value="Submit" />
          </form>
        </div>

        <div className="social-container">
          <Link to="#">Twitter</Link>
          <Link to="#">Facebook</Link>
          <Link to="#">Instagram</Link>
          <Link to="#">LinkedIn</Link>
          <Link to="#">Github</Link>
        </div>

        <div className="sponsor-img-container">
          <img className="sponsor-img" src="./images/sponsor1.png" alt="sponsor-img" />
          <img className="sponsor-img" src="./images/sponsor2.png" alt="sponsor-img" />
          <img className="sponsor-img" src="./images/sponsor3.png" alt="sponsor-img" />
          <img className="sponsor-img" src="./images/sponsor4.png" alt="sponsor-img" />
        </div>

      </div>
      </div>
    </Div>
  )
}


const Div = styled.div`
padding-top: 15rem;
  .footer-container{
    display: grid;
    align-items: center;
    gap:5rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }

    .about-container{
      display: flex;
      flex-direction: column;
      gap:2rem;
    }

    .about-heading{
      font-size:3rem;
      color: #fff;
    }

    .about-text{
      font-size: 1.5rem;
      color: #ccc;
    }

   form{
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
   }

   textarea,input{
    border: none;
    padding: 1rem 4rem;
    width: 100%;
    max-width: 250px;
    outline: none;
    border-radius: 0.5rem;
    font-size: 2rem;
    text-align: center;
  }

  input[type="submit"]{
    border: 1px solid #ccc;
    color: #fff;
    background-color: transparent;
    transition: all 0.3s ease-in;

    &:hover{
      color: #000;
      background-color: #fff;
    }
  }

  input:focus{
    border: none;
    outline: none;
  } 

  .email-heading{
    font-size: 2rem;
    color: #fff;
  }

  .social-container{
    display: flex;
    flex-direction: column;
    gap: 1rem;

    a{
      text-decoration: none;
      color: #fff;
      font-size: 2rem;
      &:hover{
        color: skyblue;
      }
    }
  }

  .sponsor-img-container{
    display: flex;
    justify-content: center;
    gap: 2.2rem;
    flex-direction: column;
  }

  .sponsor-img{
    width:100%;
    max-width: 100px;
  }


`;

export default Footer;
