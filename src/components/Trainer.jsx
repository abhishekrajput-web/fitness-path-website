import React from "react";
import styled from "styled-components";

const Trainer = ({title, img}) => {
    return (
        <Div>
            <div className="trainer-img-container">
                <img className="trainer-img" src={img} alt="trainer" />
            </div>
            <div className="trainer-data">
                <h2 className="trainer-name">{title}</h2>
            </div>

        </Div>
    )
}

const Div = styled.div`

display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  border-radius: 0.2rem;
  background-color: #fff;
  transition: all 0.3s ease-in;

  &:hover{
    background-color: #000;
    color: #fff;

    .trainer-name{
      color: #fff;
    }
  }


.trainer-img-container{
  background-color: #ccc;
overflow: hidden;
  &:hover .trainer-img{
    transform: scale(1.1);
  }
}

.trainer-img{
  width: 100%;
  display: block;
  overflow: hidden;
  transition: all 0.3s ease;
}


.trainer-name{
  font-size: 2rem;
  color: #000;
}

`;

export default Trainer;
