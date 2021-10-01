import React from 'react'
import styled from 'styled-components';

 const SeviceSection = () => {
    return (
        <Container>
           <Wrapper>
               <Card>
                   <Image/>
                   <Content>
                       <Title>Title</Title>
                       <Desc>Description</Desc>
                       </Content>
               </Card>
           </Wrapper>
       </Container>
    );
};

export default SeviceSection;

const Desc = styled.div`
margin:0 5px;
text-align: center;
`;
const Card = styled.div`
width: 300px;
height: 500px;
background-color: indigo;
border: 3px solid white;
border-radius: 10px;
margin: 10px;
transition: all 350ms;
transform: scale(1);

:hover{
     transform: scale(1.03);
     border: 2px solid black;
}
`;
const Content = styled.div`
c0lor:black;
`;
const Image = styled.img`
width: 100%;
height:50%;
object-fit: cover;
background-color: coral;
border-radius: 5px 5px 0 0;
`;
const Title = styled.div`
margin: 10px;
text-align: center;
font-weight: bold;
font-size: 25px;
text-transform: uppercase;
`;

const Container = styled.div`
width: 100%;
height: 100%;
min-height: 80vh;
background-color: red;
color: white;
`;
const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`;


