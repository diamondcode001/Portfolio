import React from 'react'
import styled from 'styled-components';
import logo from './portimg.jpg';
import HomeIcon from '@mui/icons-material/Home';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ContactsIcon from '@mui/icons-material/Contacts';


const Portfolio2 = () => {
    return (
        <Container>
            <Wrapper>
                
                <Logo src ={logo}/>
                <Navigator>
                    <Nav>
                    < HomeIcon/>
                        <span>Home</span>
                        </Nav>
                    <Nav>
                    < HomeRepairServiceIcon/>
                        <span>Service</span>
                    </Nav>
                    <Nav>
                    < OndemandVideoIcon/>
                        <span>Video</span>
                    </Nav>
                    <Nav>
                    < ContactsIcon/>
                        <span>Contact</span>
                    </Nav>
                </Navigator>
                <Button>Goto Last</Button>
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
margin:0 10px;
font-size:20px;
span{
    text-transform: uppercase;
    margin-left:8px;
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
background-color: black;
color: white;

`;
const Wrapper = styled.div`
width: 100%;
height: 80px;
background-color: ;
display: flex;
align-items: center;
`;
const Logo = styled.img`
width: 100px;
height: 60px;
object-fit: contain;
margin: 0 30px;
background-color: red;
`;
