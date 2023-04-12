import React from "react";
import ButtonBg from "./ButtonBg";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";
import styled from "styled-components";
const Price = ({title, description, price, btn}) => {
    return (
        <Div>
            <h2 className="price-heading">{title}</h2>
            <hr className="line" />
            <p className="price-value">{price}</p>
            
            <div className="features-container">
                <p className="features"> <TiTick className="tick" />{description}</p>
                <p className="features"> <TiTick className="tick" />{description}</p>
                <p className="features"> <TiTick className="tick" />{description}</p>
                <p className="features"> <ImCross className="cross" />{description}</p>
                <p className="features"> <ImCross className="cross" />{description}</p>
            </div>

            <ButtonBg className="btn btn-outline">{btn}</ButtonBg>

        </Div>

    );
}


const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  border-radius: 0.2rem;
  background-color: #fff;
  transition: all 0.3s ease-in;

  &:hover{
    background-color: #000;
    color: #fff;

    .price-heading{
      color: #fff;
    }
  }

  .price-heading{
    margin-top: 1rem;
    font-size: 3rem;
    color: #000;
  }

  .line{
    border: 1px solid orange;
    width: 100%;
  }  
  
  .price-value{
    background-color:lightsalmon;
    color: #000;
    border-radius: 0.4rem;
    font-size: 4rem;
    font-weight: 600;
    padding: 0 1rem;
  }

  .features-container{
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }
  
  .features-container .features{
    font-size: 2rem;
  }
  
  .tick{
    color: #222;
    font-size: 2.4rem;
  }

  .cross{
    color: red;
  }

.btn{
  margin-bottom: 2rem;
}  

.btn-outline{
  background-color:#000;
  color:#fff;
  &:hover{
    color: #000;
    background-color: #fff;
  }  
}  


` ;

export default Price;
