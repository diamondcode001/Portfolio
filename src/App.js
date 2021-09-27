import React from 'react'
import TodayClass from './today/TodayClass';
import "antd/dist/antd.css"
import GameScreen from './Components/SimpleGame/GameScreen.js'
import WorkHome from './Components/WorkHomeC/WorkHome'
import NewGitHub from './Components/OurBuild/NewGitHub';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {DommyHome, DommyScreen, DommySetting} from './Components/TextComp/DommyScreen';
import { HeaderNav } from './Components/TextComp/HeaderNav';
import Project2 from './Components/Project2/Project2'


const App = () => {
  return (
    
    <Router>
      <HeaderNav/>
      <Switch>
      <Route path= '/' exact component = {DommyHome}/>
        <Route path= '/about' exact component = {DommyScreen}/>
         <Route path= '/setting' exact component = {DommySetting}/>
        <Route path= '/Project2' exact component = {Project2}/>
        <Route path= '/NewGitHub' exact component = {NewGitHub}/>
      </Switch>
    </Router>
  );
};
export default App;