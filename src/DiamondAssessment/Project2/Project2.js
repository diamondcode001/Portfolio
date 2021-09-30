import React from 'react'
import styled from 'styled-components';
import img from "./main.png";
import MyGlobal from './MyGlobal';

const Project2 = () => {
    return (
       <Container>
           <Wrapper>
               <ContainerBox>
                   <Title>Best VIP project Bidding Theme - Freelance Masterpiece 
                       2021 </Title>
                       {" "}
                   <Content>The most complete freelancer marketplace theme in the world.
                        Build your freelancer website with the best template. 
                        Finest written code and awesome customer support!{" "}
                         </Content>
                        <Sub>{" "}
                           <h3> Starting from </h3>   <span><p>$</p>149</span> {" "}
                        <MyGlobal name = 'see pricing' dw1 dw/>
                         </Sub>
                   <Button>
                       <MyGlobal name = 'View Demo'/>
                       <MyGlobal name = 'Purchase Theme'/>
                   </Button>
               </ContainerBox>
               <Image src = {img}/>
           </Wrapper>
       </Container>
    )
}
 
export default Project2;

const Title = styled.h2`
color: white;
`;
const Sub= styled.div`
display: flex;
margin: 5px 0;
align-items: center; 

h3{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    font-size: 25px;
    color: white;
}

span{
    margin-left: 5px;
    color: lightgreen;
    font-weight: bold;
    display: flex;
    font-size: 25px;

    p{
        margin: 0;
        font-size: 15px;
    }
}
`;
const Button = styled.div`
display: flex;
`;

const ContainerBox = styled.div`
min-width: 300px;
width: 400px;
height: 500px;
background-color: ;
color: white;
margin: 5px;
margin-left: auto;
`;
const Content = styled.div``;
const Image = styled.img`
min-width: 300px;
width: 400px;
height: 500px;
object-fit: contain;
background-color: ;
margin: 5px;
margin-left: auto;
`;
const Container = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
background-image: url('sitemile.jpeg');
background-position: center;
background-size: cover;
background-repeat: no-repeat;
`;
const Wrapper = styled.div`

display: flex;
align-items:center;
justify-content: center;
flex-wrap: wrap;
padding: 100px;
`;