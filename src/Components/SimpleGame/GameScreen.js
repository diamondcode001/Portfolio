import React, {useState,useEffect } from 'react';
import  styled from 'styled-components'

 const GameScreen = () => {
     const [picker, setPicker] = useState(0);
     const [computer, setComputer] = useState(0);

     const guessValue = () => {
         setComputer (Math.random());
         console.log(computer)
     };

    useEffect(() => {
        guessValue();
    }, [])

    return (
        <Section>
            <Wrapper>
                <Container> Diamond's Game</Container>
                <Row>
                    <RowItem>
                        <BoxRow>{picker}</BoxRow>
                        <Number>
                        <DisplaySection 
                        onClick={() => {
                            setPicker(1);
                            console.log(picker);
                        }}
                        >
                            1{''}
                            </DisplaySection>
                        <DisplaySection
                        onClick={() => {
                            setPicker(2);
                            console.log(picker);
                        }}
                        >
                            2
                            {''}
                            </DisplaySection>
                        <DisplaySection
                        onClick={() => {
                            setPicker(3);
                            console.log(picker);
                        }}
                        >
                            3{''}
                            </DisplaySection>

                        <DisplaySection
                        onClick={() => {
                            setPicker(4);
                            console.log(picker);
                        }}
                        >
                            4{''}
                            </DisplaySection>

                        <DisplaySection
                        onClick={() => {
                            setPicker(5);
                            console.log(picker);
                        }}
                        >
                            5{''}
                            </DisplaySection>
                        </Number>
                        <BoxRow1>Me</BoxRow1>
                    </RowItem>
                    <RowItem>
                        <BoxRow>{computer}</BoxRow>
                        <BoxRow1>Computer</BoxRow1>
                    </RowItem>
                </Row>
                <Result>Result</Result>
            </Wrapper>
        </Section>
    )
}
export default GameScreen;

const Number = styled.div`
display: flex;
`;
const DisplaySection = styled.div`
margin: 5px 10px;
width: 30px;
height: 30px;
background-color: teal;
border-radius: 50px;
justify-content: center;
display: flex;
align-items: center;
font-size: 15px;
font-weight: bold;
transform: scale(1);
transition: all 350ms;


:hover {
    cursor: pointer;
    transform: scale(1.2);
}
`;

const BoxRow1 = styled.div`

`;
const BoxRow = styled.div`
width: 250px;
height: 150px;
background-color: white;
border-radius: 10px;
margin: 20px;
color: blue;
display: flex;
align-items: center;
justify-content: center;
font-weight: bold;
font-size: 30px;
`;
const RowItem = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`;
const Result = styled.div`
margin-top: 20px;
font-size: 25px;
`;
const Section = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
background-color: green;
`;
const Container = styled.div`
font-size: 50px;
font-weight: bold;
margin: 30px;
`;

const Row = styled.div`
display: flex;
width: 80%;
justify-content: space-around;
`;

const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
padding-top: 50px;
flex-direction: column;
align-items: center;
`;

