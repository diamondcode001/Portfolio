import React from 'react'
import styled from 'styled-components';

const VideoSection = () => {
    return (
        <Container>
        <Wrapper>
            <Title>Subscribe To Our NewsLetter</Title>
            <Holder>
                <Input placeholder="Enter Your Email"/>
                <Button>Submit</Button>
            </Holder>
        </Wrapper>
    </Container>
    )
}

export default VideoSection;

const Input = styled.div``;
const Holder = styled.div``;
const Button = styled.button``;
const Title = styled.div``;
const Container = styled.div`
width: 100%;
height: 100%;
min-height: 80vh;
background-color: blue;
color: white;
`;
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
`;
