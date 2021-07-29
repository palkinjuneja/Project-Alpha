
import './Main.css';
import { useEffect, useState } from 'react'
import SigninOnboard from './components/figmaLogin';
import CompletedProfile from './components/figmaProfileComp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import EditProfile from './components/EditProfile';
import OldUser from './components/oldUser';
import { UserContext } from './userContext';
import NewProfile from './components/newProfile';
import UserView from './components/UserView';
import UserMain from './components/UserMain';
import FindPeople from './components/FindPeople';
import Collab from './components/Collab';
import MyProject from './components/myProjects';
import Project from './components/projects';
import CreateProject from './components/createProject';
import EditProject from './components/editProject';
import ProjectDetails from './components/projectDetails';


function App() {
  console.log("Inside app")
 
  const isLoggedIn = () => {
    const data = JSON.parse(localStorage.getItem('userDetails'))

    if (data) {
      return (
        <Switch>
            <Route path='/profile'>
                <NewProfile />
              </Route>
              <Route path="/User/:userId" component={UserView} />
              <Route path="/User" component={UserMain} />
              <Route path ="/Invites" component={Collab}/>  
              <Route path="/project/:id" component={MyProject} />
              <Route path="/project" component={Project} />
        <Route path="/projectDetails/:id" component={ProjectDetails} />
        <Route path="/createProject" component={CreateProject} />
        <Route path="/editProject/:id" component={EditProject} />
        </Switch>)
    } else {
      return (
        <div>
          <h5>
            You are not logged in !!
          </h5>
          <a href="/">Click here to login</a>
        </div>
      )
    }
  }

  return (
    
      <Router>
        <div className="App">
          <div className="content">
            <Switch>
            <Route exact path='/'>
                <SigninOnboard />
              </Route>
            <Route path='/oldUser/*'>
                <OldUser />
              </Route>
              <Route path='/profile'>
                <NewProfile />
              </Route>
              <Route path='/edit'>
                <EditProfile />
              </Route>
              {isLoggedIn()}
              
            </Switch>
            
             
             
           
          </div>
        </div>
      </Router>

  );
}

export default App;
