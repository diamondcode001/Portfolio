import React from 'react'
import styled from 'styled-components';

const PassProps = ({img, title, sub, subText}) => {
    return (
       <Holder>
           <Container>
           <Image src = {img}/>
           <Content>
               <HeaderContent>{title}</HeaderContent>
               <HeaderSub> {sub} 
               <span>{subText} </span>                  
               </HeaderSub>
           </Content>
       </Container>
       </Holder>
    )
}

export default PassProps;

const HeaderContent = styled.div`
font-size: 30px;
margin-bottom: 20px;
`;
const HeaderSub = styled.div`
color: lightgrey;
line-height: 1.5;
font-size: 15px;
span{
color: #8f55b3;

:hover{
cursor: pointer;
text-decoration: underline;
}
}
`;
const Holder = styled.div`;
width: 100%;
display: flex;
justify-content: center;
`;
const Container = styled.div`
width: 70%;
display: flex;
justify-content: space-between;
`;
const Image = styled.img`
width: 300px;
height: 300px;
border-radius: 10px;
object-fit: cover;
`;
const Content = styled.div`
width: 500px;
`;
