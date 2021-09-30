import React from 'react'
import styled from 'styled-components';
import logo from './portimg.jpg';
import {AiOutlineHome, AiOutlineSetting, AiOutlineProfile} from 'react-icons/ai'


const Portfolio2 = () => {
    return (
        <Container>
            <Wrapper>
                
                <Logo src ={logo}/>
                <Navigator>
                    <Nav>
                        <p><AiOutlineHome/></p>
                        <span>Home</span>
                    </Nav>
                    <Nav>
                      <p>  <AiOutlineProfile/></p>
                        <span>Profile</span>
                    </Nav>
                    <Nav>
                        <p><AiOutlineSetting/></p>
                        <span>Settings</span>
                    </Nav>
                </Navigator>
                <Button>Log In</Button>
            </Wrapper>
        </Container>

    )
}

export default Portfolio2;

const Button = styled.button`
margin-right: 30px;
width: 120px;
height: 45px;
outline: none;
color: black;
border-radius: 3px;
background-color: white;
transform: scale(1);
transition: all 400ms;
font-weight: bold;

:hover{
    cursor: pointer;
    transform: scale(1.05);
    border: 2px solid white;
    background-color: transperent;
    color: white;
}
`;

const Nav = styled.div`
display: flex;
align-items: center;
margin: 0 10px;

p{
    font-size: 20px;
    margin-right: 5px;
    color: rgba(255, 255, 255, 0.7);
    transition: all 400ms;
}

span{
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    position: relative;

    :after{
        content: "";
        position: absolute;
        bottom: -1px;
        left: 0;
        height: 3px;
        width: 100%;
        background-color: white;
        opacity: 0;
        transition: all 400ms;
        transform: scale(0);
        transform-origin: center;
    }
}

:hover{
    cursor:pointer;
}

span{
    :after{
        opacity:1;
        transform:scale(1);
    }
}
`;
const Navigator = styled.div`
display: flex;
flex: 1;
`;
const Container = styled.div`
width: 100%;
height: 80px;
background-color: #011834;
color: white;

`;
const Wrapper = styled.div`
width: 180px;
height: 80px;
background-color: ;
display: flex;
align-items: center;
`;
const Logo = styled.img`
width: 180px;
height: 50px;
object-fit: contain;
margin: 0 30px;
`;
