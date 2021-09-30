import React from 'react'
import TodayClass from './today/TodayClass';
import "antd/dist/antd.css"
import GameScreen from './Components/SimpleGame/GameScreen.js'
import WorkHome from './Components/WorkHomeC/WorkHome'
import NewGitHub from './Components/OurBuild/NewGitHub';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {DommyHome, DommyScreen, DommySetting} from './Components/TextComp/DommyScreen';
import { HeaderNav } from './Components/TextComp/HeaderNav';
import Project2 from './Components/Project2/Project2';
import WorkHomeC from './Components/WorkHomeC/WorkHome';
import CounterProject from './Components/CounterProject/Counter';
import SimpleGame from './Components/SimpleGame/GameScreen';
import Mother from './DiamondAssessment/Mother'
import PortMother from './Portfolio1/PortMother'

const App = () => {
  return (
    <div>
       <PortMother/>
    </div>
 /* <Router>
     
      <HeaderNav/>
      <Switch>
      <Route path= '/Project2' exact component = {Project2}/>
        <Route path= '/CounterProject' exact component = {CounterProject}/>
         <Route path= '/WorkHomeC' exact component = {WorkHomeC}/>
        <Route path= '/GameScreen' exact component = {GameScreen}/>
        <Route path= '/NewGitHub' exact component = {NewGitHub}/>
      </Switch>
    </Router>*/
  );
};
export default App;