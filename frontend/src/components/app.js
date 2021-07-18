import {React} from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";
import '../stylesheet/app.css';
import MyProject from './myProjects';
import Project from './projects';

function app() {
  return (
    <Router>
        <Route path="/project" component={Project} />
        <Route path="/user/:id" component={MyProject} />
    </Router>
  );
}

export default app;
