
import './App.css';
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
              <Route path ="/inviteClick" component={InviteClick}/>  
            </Switch>
          </div>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
