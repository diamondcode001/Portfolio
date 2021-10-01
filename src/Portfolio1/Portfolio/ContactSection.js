import React from 'react'
import styled from 'styled-components';

const ContactSection = () => {
    return (
        <Container>
        <Wrapper></Wrapper>
    </Container>
    )
}

export default ContactSection;

const Container = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
background-color: brown;
color: white;
`;
const Wrapper = styled.div`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
