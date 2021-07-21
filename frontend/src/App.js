
import './App.css';

//importing hooks from react module
import {useEffect, useState} from 'react'
import SigninOnboard from './components/figmaLogin';
import LinkedInImport from './components/figmaProfile';
import CompletedProfile from './components/figmaProfileComp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar';
import EditProfile from './components/EditProfile';

function App() {

  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route path='/first'>
              <SigninOnboard />
            </Route>
            <Route path='/profile'>
              <LinkedInImport />
            </Route>
            <Route path='/procomp'>
              <CompletedProfile />
            </Route>
            <Route path='/edit'>
             <EditProfile />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
