import React from "react";
import styled from "styled-components";
import SectionHeading from "../components/SectionHeading";
import Trainer from "../components/Trainer";
import trainers from "../data/trainers";

const Trainers = () => {
  return (
    <Section>
      <SectionHeading>
        Our Trainers
      </SectionHeading>

      <div className="container">
        <div className="common-section-container">
  
   {trainers.map((trainer, i) => (
    <Trainer title={trainer.title} img={trainer.img} key={i}/>
  ))}
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding-top: 5rem;
`;

export default Trainers;
