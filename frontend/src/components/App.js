
import '../stylesheet/App.css';
import FindPeople from './FindPeople';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import UserMain from './UserMain';
import UserView from './UserView';
import NavBar from './NavBar';
import dotenv from 'dotenv'
import { CurrentUserProvider } from "./CurrentUserContext"
import InviteClick from './InviteClick';
import {useState} from 'react';
import { useCurrentUser } from './CurrentUserContext';

function App() {
  require('dotenv').config();
 // const [currentUser,setcurrentUser] = useState("Not a user")
  const {currentUser} =useCurrentUser();
  return (
    <div>
      <CurrentUserProvider>
        <Router forceRefresh={false}>
        <Switch>
            <Route path="/User/:userId" component ={UserView}/>  
            
            <Route path="/User" component={UserMain}/>
             <Route path="/Project/:ProjectId" component={FindPeople}/>
           <Route path="/Project" component={FindPeople}/>
            <Route path ="/" component={InviteClick}/>              
        </Switch>
      </Router>
    </CurrentUserProvider>
    </div>
    
      
    

   
  );
}

export default App;
