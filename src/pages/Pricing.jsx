import React from "react";
import styled from "styled-components";
import SectionHeading from "../components/SectionHeading";
import Price from "../components/Price";
import pricing from "../data/pricing";
const Pricing = () => {

  return (
  <Section>

    <div className="container">

<SectionHeading>pricing</SectionHeading>

<div className="common-section-container">
  {pricing.map((pric, i) => (
    <Price title={pric.title} description={pric.description} price={pric.price} btn={pric.btn} key={i}/>
  ) )}
</div>
</div>

  </Section>
  )
}

const Section = styled.section`
padding-top: 5rem;
}
`;



export default Pricing;
