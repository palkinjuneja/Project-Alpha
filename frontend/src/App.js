
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
import InviteClick from './components/InviteClick';
import Collab from './components/Collab';
import MyProject from './components/myProjects';
import Project from './components/projects';
import CreateProject from './components/createProject';
import EditProject from './components/editProject';
import ProjectDetails from './components/projectDetails';


function App() {
  const [user, setUser] = useState("context message")

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <div className="App">
          <div className="content">
            <Switch>
              <Route path='/first'>
                <SigninOnboard />
              </Route>
              <Route path='/profile'>
                <NewProfile />
              </Route>
              <Route path='/edit'>
                <EditProfile />
              </Route>
              <Route path='/oldUser/*'>
                <OldUser />
              </Route>
              <Route path="/User/:userId" component={UserView} />
              <Route path="/User" component={UserMain} />
              <Route path="/findPeople" component={FindPeople}/>
              <Route path ="/Invites" component={Collab}/>  
              <Route path="/project" component={Project} />
        <Route path="/projectDetails/:id" component={ProjectDetails} />
        <Route path="/user/:id" component={MyProject} />
        <Route path="/createProject" component={CreateProject} />
        <Route path="/editProject/:id" component={EditProject} />

            </Switch>
          </div>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
