import React from 'react'
import styled from 'styled-components';
import Portfolio2 from './Portfolio/Porforlio2';
import HeroSection from './Portfolio/HeroSection';
import ServiceSection from './Portfolio/SeviceSection';
import VideoSection from './Portfolio/VideoSection';
import ContactSection from './Portfolio/ContactSection';
import FooterSection from './FooterSection'

const SumPage = () => {
    return (
       <Container>
           <Wrapper>
               <Portfolio2/>
              <HeroSection/>
              <ServiceSection/>
              <VideoSection/>
              <ContactSection/>
              <FooterSection/>
               </Wrapper>
       </Container>
    );
};
export default SumPage;

const Container = styled.div``;
const Wrapper = styled.div``;