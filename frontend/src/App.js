
import './App.css';
import { useEffect, useState } from 'react'
import SigninOnboard from './components/figmaLogin';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import OldUser from './components/oldUser';
import { UserContext } from './userContext';
import NewProfile from './components/newProfile';
import UserView from './components/UserView';
import UserMain from './components/UserMain';
import FindPeople from './components/FindPeople';
import InviteClick from './components/InviteClick';
import ResponsiveEdit from './components/responsiveEditProfile';
import ResponsiveProfile from './components/responsiveProfile';
import ResponsiveLogin from './components/responsiveLogin';

function App() {
  const [user, setUser] = useState("context message")

  const isLoggedIn = () => {
    const data = JSON.parse(localStorage.getItem('userDetails'))

    if (data) {
      return (
        <Switch>
          <Route path='/profile'>
            <ResponsiveProfile />
          </Route>
          <Route path='/edit'>
            <ResponsiveEdit />
          </Route>
          <Route path='/resEdit' component={ResponsiveEdit} />
          <Route path="/User/:userId" component={UserView} />
          <Route path="/User" component={UserMain} />
          <Route path="/findPeople" component={FindPeople} />
          <Route path="/inviteClick" component={InviteClick} />
        </Switch>)
    } else {
      return (
        <div>
          <h5>
            You are not logged in !!
          </h5>
          <a href="/first">Click here to login</a>
        </div>
      )
    }
  }

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <div className="App">
          <div className="content">
            <Switch>
              <Route path='/first'>
                <SigninOnboard />
              </Route>
              <Route path='/second'>
                <ResponsiveLogin />
              </Route>
              <Route path='/oldUser/*'>
                <OldUser />
              </Route>
              {isLoggedIn()}
            </Switch>
          </div>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
