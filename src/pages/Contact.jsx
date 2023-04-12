import React from "react";
import styled from "styled-components";
import SectionHeading from "../components/SectionHeading";

const Contact = () => {
  return (
 
    <Section>
      <div className="container">
  <SectionHeading>Contact Us</SectionHeading>
<form action="https://formspree.io/f/meqdedje" method="post" autoComplete="off">
  <input type="text" name="fName" id="fName" placeholder="First Name" required minLength={3} />
  <input type="text" name="lName" id="lName" placeholder="Last Name" required minLength={5} />
  <input type="email" name="email" id="email" placeholder="Email" required />
  <input type="text" name="phone" id="phone" placeholder="phone Number" required min={10} />
  <textarea name="message" id="message" cols="30" rows="5" placeholder="message" required></textarea>
  <input type="submit" name="submit" id="submit" value="submit" />
</form>
</div>
    </Section>


  )
}

const Section = styled.section`
  padding-top: 5rem;

  form{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex-direction: column;
  }

  textarea,input{
    border: none;
    padding: 1rem 4rem;
    width: 100%;
    max-width: 750px;
    outline: none;
    border-radius: 0.5rem;
    font-size: 2rem;
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


`;

export default Contact;
