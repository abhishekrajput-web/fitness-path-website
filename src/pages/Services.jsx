import React from "react";
import styled from "styled-components";
import SectionHeading from "../components/SectionHeading";
import Service from "../components/Service";
import data from "../data/services";
const Services = () => {
  return (
    <Section>
      <div className="container">
      <SectionHeading>
        Our Services
      </SectionHeading>
        <div className="common-section-container">
          {data.map((serv, i) => (
            <Service img={serv.img} title={serv.title} description={serv.description} key={i}/>
          ))}
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
padding-top: 5rem;
`;

export default Services;
