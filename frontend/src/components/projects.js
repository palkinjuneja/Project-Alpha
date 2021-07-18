import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './pagination';
import Footer from './footer';
import '../stylesheet/app.css'


function Projects(props) {

    const [projects, setState] = useState([]);

    const getData = async ()=>{
       try{
          //Fetch Projects
          const res = await axios.get("http://localhost:8000/project/");
          setState(res.data);
       }
       catch(err){
         console.log(err);
       }
    }
    
    useEffect(() => getData(), []);

    const [showPerPage, setPerPage] = useState(12);
    const [pageNumber, setPageNumber] = useState({ start: 0, end: showPerPage});  

    const pageNoChange = (start, end)=>{
      setPageNumber({start, end});
    }

    return (
        <div>
          <div className="topnav">
          <span style={{paddingLeft: 60}}>
            <span style={{fontSize:37, color:"pink"}}>O</span><span style={{fontSize:27, color:"white"}}>union</span>
          </span>
    <div className="topnav-right" style={{paddingRight: 63}}>
      <a href={"/user/"+"60f2bd89c6897f3604ef596d"}>My Projects</a>
      <a href="#myProjects">Display Pic</a>
    </div>
  </div>

    <div style={{paddingLeft: 50, paddingRight: 50}}>
  <div className = "container-fluid">
      <h3>Find Ideas, Collaborate together and Build the Portfolio for your Career</h3>
  </div>

  <pre style = {{background: "white", border: "none"}}>

  </pre>
  <h3 className="container-fluid">Project Lists</h3>
  <pre style = {{background: "white", border: "none"}}>
    <button type="button" class="btn btn-primary" style = {{float: "right", marginRight: 20}} onClick={event =>  window.location.href='http://localhost:3000/createProject'}>Create Project</button>
  </pre>
    <div className="container-fluid">
      {
        projects.slice(pageNumber.start,pageNumber.end).map((project) => {
          return (
            <div className="col-sm-3" key={project._id}>
                    <div className="card">
                      <div className="card-body">
                        <h3 className="card-title">{project.project_name}</h3>
                        <h5 className="card-text">Satus: {project.status}</h5>
                        <p className="card-text">{project.description}</p>
                        <a href="#" >More</a>
                      </div>
                    </div>
                    <br/><br/>
                </div>
          );
        })
      }
    </div>
    <div className="container-fluid">
    <Pagination showPerPage={showPerPage} pageNoChange={pageNoChange} projectCount={projects.length}/>
    </div>
    </div>
    <Footer />
  </div>
)
}

export default Projects;