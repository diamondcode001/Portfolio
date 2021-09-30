import React from 'react'
import styled from 'styled-components';
import img from "../gitimg.svg";

const HeaderBuilt = () => {
    return (
       <Container>
           <Image src={img}/>
           <Wrapper>
               <Diamond clr>Overview</Diamond>
               <Diamond>Release Notes</Diamond>
               <Diamond>Help</Diamond>
           </Wrapper>
       </Container>
    );
};

export default HeaderBuilt;

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;

const Image = styled.img`
background-color: black;
width:150px;
height: 150px;
border-radius: 150px;
object-fit: cover;
margin-bottom: 30px;
cursor: pointer;
`;
const Wrapper = styled.div`
display: flex;
justify-content: space-around;
width: 300px;
`;
const Diamond = styled.div`
font-weight: bold;
color: ${({clr}) =>(clr ? "white" : "#8F55B3")};

:hover{
    cursor: pointer;
    text-decoration: underline;
}
`;
