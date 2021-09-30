import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SumPage from './SumPage'
import HeroSection from './Portfolio/HeroSection';
import ServiceSection from './Portfolio/SeviceSection';
import ContactSection from './Portfolio/ContactSection';
import VideoSection from './Portfolio/VideoSection';
import FooterSection from './FooterSection'


const PortMother = () => {
    return (
       <Router>
           <SumPage/>
           <Switch>
           <Route path= '/HeroSection' exact component = {HeroSection}/>
           <Route path= '/ServiceSection' exact component = {ServiceSection}/>
           <Route path= '/ContactSection' exact component = {ContactSection}/>
           <Route path= '/VideoSection' exact component = {VideoSection}/>
           <Route path= '/FooterSection' exact component = {FooterSection}/>
           </Switch>
       </Router>
    )
}
 
export default PortMother;