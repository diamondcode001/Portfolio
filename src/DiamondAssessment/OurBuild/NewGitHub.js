import React from 'react'
import styled from 'styled-components'
import HeaderBuilt from './HeaderBuilt'
import HeaderTop from "./HeaderTop";
import PassProps from './PassProps';

const NewGitHub = () => {
    return (
       <Container>
           <Wrapper>
            <HeaderBuilt/>
            <HeaderTop/>
            <PassProps title = 'Attributes commits with collaborators easily'
            sub = 'Quickly add co-authors to your commit.
            Great for pairing and excellent for sending a
             little love/credit to that special someone who
             helped fix that gnarly bug of yours. See the attribution 
             on the history page, undo an accidental attribution, and'
             subText =  'see the co-authors on github.com'/>
            <PassProps/>
            <PassProps/>
           </Wrapper>
       </Container>
    )
}

export default NewGitHub;

const Container = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
color: white;
background-image: url('background.svg');
background-repeat: no-repeat;
background-size: cover;
background-position: center;
padding-top: 50px;
`;
const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;
