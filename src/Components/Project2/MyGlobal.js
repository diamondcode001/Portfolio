import React from 'react'
import styled from 'styled-components';

const MyGlobal = ({name, dw, dw1, clr}) => {
    return (
       <Container dw1= {dw1} dw= {dw} clr= {clr}>
           <Wrapper>{name}</Wrapper>
       </Container>
    );
};

export default MyGlobal;

const Container = styled.div`
background-color: ${({dw1}) => (dw1 ? 'orange' : 'blue')}; 
border-radius: 3px;
padding: 10px;
margin: 10px;
transition:all 350ms;
transform: scale(1);
color: ${({clr}) => (clr ? 'white' : 'black')};

:hover{
    cursor: pointer;
    transform: scale(1.05);
    background-color: ${({dw}) => (dw ? 'yellow' : 'teal')};
    color: white;
}
`;
const Wrapper = styled.div``;