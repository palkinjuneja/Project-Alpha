import {React} from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";
import '../stylesheet/app.css';
import MyProject from './myProjects';
import Project from './projects';
import CreateProject from './createProject';
import EditProject from './editProject';
import ProjectDetails from './projectDetails';

function app() {
  return (
    <Router>
        <Route path="/project" component={Project} />
        <Route path="/projectDetails/:id" component={ProjectDetails} />
        <Route path="/user/:id" component={MyProject} />
        <Route path="/createProject" component={CreateProject} />
        <Route path="/editProject/:id" component={EditProject} />
    </Router>
  );
}

export default app;
