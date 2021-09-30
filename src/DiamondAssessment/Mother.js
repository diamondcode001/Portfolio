import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HeaderNav from './HeaderNav'
import Project2 from './Project2/MyGlobal'
import CounterProject from './CounterProject/Counter'
import WorkHomeC from './WorkHomeC/WorkHome'
import GameScreen from '../Components/SimpleGame/GameScreen';
import NewGitHub from './OurBuild/NewGitHub';



const Mother = () => {
    return (
         <Router>
      <HeaderNav/>
      <Switch>
      <Route path= '/Project2' exact component = {Project2}/>
        <Route path= '/CounterProject' exact component = {CounterProject}/>
         <Route path= '/WorkHomeC' exact component = {WorkHomeC}/>
        <Route path= '/GameScreen' exact component = {GameScreen}/>
        <Route path= '/NewGitHub' exact component = {NewGitHub}/>
      </Switch>
    </Router>
    )
}

export default Mother;