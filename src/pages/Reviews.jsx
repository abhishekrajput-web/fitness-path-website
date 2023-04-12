import React from "react";
import styled from "styled-components";
import SectionHeading from "../components/SectionHeading";
import Review from "../components/Review";
import reviews from "../data/reviews";
const Reviews = () => {
  return (
    <Section>
      <div className="container">

        <SectionHeading>Our Reviews</SectionHeading>
        <div className="common-section-container">
          {reviews.map((review, i) => (
            <Review title={review.title} description={review.description} img={review.img} key={i} />
          ))}
        </div>

      </div>
    </Section>
  )
}

const Section = styled.section`
padding-top: 5rem;
}
`;


export default Reviews;
