import {React} from 'react'
import '../stylesheet/app.css';
import Projects from '../components/projects';
import ProjectDetails from './projectDetails';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import CreateProject from './createProject';
import MyProject from './myProjects';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/projects" component={Projects} />
          <Route  path="/projects/:id" component={ProjectDetails} />
          <Route path="/user/:id" component={MyProject} />
          <Route path="/createProject" component={CreateProject} />
        </Switch>
    </Router>
    </div>
  );
}

export default App;
