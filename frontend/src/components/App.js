
import '../stylesheet/App.css';
import FindPeople from './FindPeople';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import UserMain from './UserMain';
import UserView from './UserView';
import NavBar from './NavBar';
import dotenv from 'dotenv'



function App() {
  require('dotenv').config();
  return (
    <Router>
      <Switch>
        <Route path="/User/:userId" component ={UserView}/>  
        <Route path="/User" component={UserMain}/>
        <Route path="/Project/:ProjectId" component={FindPeople}/>
        <Route path="/Project" component={FindPeople}/>      
        <Route path ="/" component={FindPeople}/>
      </Switch>
    </Router>
    
  );
}

export default App;
