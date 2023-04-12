import React from 'react';
import styled from 'styled-components';

const Review = ({ title, description, img }) => {
  return (
    <Div>
      <img className='review-img' src={img} alt="reviewer-img" />
      <h2 className='reviewer-name'>{title}</h2>
      <p className='review-description'>{description}</p>
    </Div>
  )
}

const Div = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
background-color: #fff;
border-radius: 0.2rem;
transition: all 0.3s ease-in;

&:hover{
    background-color: #000;
    color: #fff;

    .review-img{
      border: 2px solid lightgreen;
      width: 124px;
      height: 124px;
    }

    .reviewer-name{
      color: #fff;
    }

    .review-description{
      color: #fff;
    }

  }

.review-img{
  width: 125px;
  height: 125px;
  border-radius: 50%;
}

.reviewer-name{
  font-size: 2rem;
  color: #000;
}

.review-description{
font-size: 1.4rem;
color: #333;
}

`;
export default Review;
