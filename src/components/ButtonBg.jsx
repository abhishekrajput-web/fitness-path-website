import React from "react";
import styled from "styled-components";

const ButtonBg = styled.button`
    
padding: 0.9rem 3.5rem;
background-color: lightseagreen;
color: #fff;
border: none;
cursor:pointer;
font-size: 2rem;
border-radius: 0.5rem;
opacity: 0.8;
transition: all 0.2s ease-in;
transform: scale(1);

&:hover{
opacity: 1;
transform: scale(1.1);
color: #eee;
}
`

export default ButtonBg;
