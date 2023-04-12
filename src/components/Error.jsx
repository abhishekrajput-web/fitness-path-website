import React from "react";
import styled from "styled-components";
import ButtonOutline from "./ButtonOutline";
import {NavLink} from "react-router-dom";

const Error = () => {
  return (
      <Section>
        <div className="error-container">
          <img className="error-img" src="./images/error1.png" alt="404" />
          <NavLink to="/">
          <ButtonOutline className="error-btn">Go Back</ButtonOutline>
          </NavLink>
        </div>
      </Section>
  )
}

const Section = styled.section`
  padding-bottom: 5rem;

  .error-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5rem;
    width: 100%;
    height: 100vh;
    margin-top: 5rem;
  }

  .error-img{
    display: block;
    width: 100%;
    max-width: 750px;
  }

  .error-btn{
    color: #000;
    background-color:#ccc;
    &:hover{
      background-color: #000;
      color: #fff;
    }
  }

`;

export default Error;
