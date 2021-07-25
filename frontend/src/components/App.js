
import '../stylesheet/App.css';
import FindPeople from './FindPeople';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import UserMain from './UserMain';
import UserView from './UserView';
import NavBar from './NavBar';
import dotenv from 'dotenv'
import InviteClick from './InviteClick';
import {useState} from 'react';
import Collaborations from './Collaborations';


function App() {
  require('dotenv').config();
  return (
    <div>
        <Router forceRefresh={false}>
        <Switch>
            <Route path="/User/:userId" component ={UserView}/>  
            
            <Route path="/User" component={UserMain}/>
             <Route path="/Project/:ProjectId" component={FindPeople}/>
           <Route path="/Project" component={Collaborations}/>
            <Route path ="/" component={InviteClick}/>              
        </Switch>
      </Router>
    </div> 
  );
}

export default App;
