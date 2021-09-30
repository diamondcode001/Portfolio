import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {AiOutlineHome,AiOutlineSetting,AiOutlineFlag} from 'react-icons/ai';

 const HeaderNav = () => {
    return(
        <Container>
            <Wrapper>
               <Logo/>
               <NavLink>
               <TheLink to = '/NewGitHub' ><AiOutlineHome/></TheLink>
               <TheLink to = '/GameScreen'><AiOutlineSetting/></TheLink>
               <TheLink to = '/Project2'><AiOutlineFlag/></TheLink>
               <TheLink to = '/WorkHomeC'><AiOutlineFlag/></TheLink>
               <TheLink to = '/CounterProject'><AiOutlineFlag/></TheLink>
               </NavLink>
            </Wrapper>
        </Container>
    );
};

export default HeaderNav;

const NavLink = styled.div`
dibsplay: flex;

`;
const TheLink = styled(Link)`
margin: 0 10px;
color: black;
text-decoration: none; 
width: 60px;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
transition: all 350ms;
background-color: rgba(0, 0, 0, 0.1);

:hover{
    background-color: teal;
}
 `;
const Logo = styled.img`
width: 300px;
height:50px;
background-color: plum;
object-fit: contain;
`;

const Container = styled.div`
width: 100%
height: 100px;
background-color: pink;
color: blue;
`;
const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`;