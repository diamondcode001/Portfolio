import React from 'react'
import styled from 'styled-components';

 const HeroSection = () => {
    return (
        <Container>
        <Wrapper>
            <Image/>
            <Content>
                <Title>Name</Title>
                <Desc>Description</Desc>
                <Div>
                <Button>Button</Button>
                <Button>Button</Button>
                </Div>
            </Content>
        </Wrapper>
    </Container>
    );
};

export default HeroSection;

const Button = styled.button`
margin: 0 10px;
width: 100px;
height: 40px;
color: black;
font-weight: bold;
border: 2px solid white;
outline: none;
border-radius: 3px;
background-color: transperent;

:hover{
    border: 4px solid white;
}
`;
const Content = styled.div` 
margin: 0 30px;
`;
const Title = styled.div`
font-size: 30px;
font-weight: bold;
margin: 5px 0;
`;
const Desc = styled.div`
margin-top: 10px;
`;

const Image = styled.img`
width: 350px;
height: 500px;
background-color: white;
object-fit: cover;
margin: 0 30px;
`;
const Div = styled.div``;

const Container = styled.div`
width: 100%;
height: 100%;
min-height: 80vh;
background-color: ;
color: white;
font-family: Poppins;
background-image: url("sitemile.jpeg");
background-repeat: no-repeat;
background-position: center;
`;
const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
padding-top: 40px;
`;

