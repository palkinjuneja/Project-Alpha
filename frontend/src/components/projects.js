import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './pagination';
import Footer from './footer';
import '../styles/app.css'
import FindPeople from './FindPeople';


function Projects(props) {
  const data = JSON.parse(localStorage.getItem('userDetails'))

    const [projects, setState] = useState([]);

    const getData = async ()=>{
       try{
          //Fetch Projects
          const res = await axios.get("http://localhost:9000/project/");
          setState(res.data);
       }
       catch(err){
         console.log(err);
       }
    }
    
    useEffect(() => getData(), [projects]);

    const [showPerPage, setPerPage] = useState(8);
    const [pageNumber, setPageNumber] = useState({ start: 0, end: showPerPage, cnt: 0});  

    const pageNoChange = (start, end, counter)=>{
      let cnt = projects.length-showPerPage*(counter-1);

      setPageNumber((prevState)=>{
        return {...prevState, start:start, end:end, cnt: cnt}
      });
    }

    const getSpace = () =>{
      if(pageNumber.cnt<=4){
        return(
          <>
            <pre style = {{background: "white", border: "none"}}>

            </pre>
            <pre style = {{background: "white", border: "none"}}>
              
            </pre>
            <pre style = {{background: "white", border: "none"}}>
              
            </pre>
            <pre style = {{background: "white", border: "none"}}>
              
            </pre>
          </>
        )
      }
    }

    const getFooter = () =>{
      if(pageNumber.cnt>4){
        return (
          <Footer />
        )
      }
      else {
        return(
          <div>
            <Footer />
          </div>
        )
      }
    }

    return (
        <div>
          <div className="topnav">
          <span style={{paddingLeft: 60}}>
            <span style={{fontSize:37, color:"pink"}}>O</span><span style={{fontSize:27, color:"white"}}>union</span>
          </span>
    <div className="topnav-right" style={{paddingRight: 63}}>
      <a href={"/project/"} className = "active">Home</a>
      <a href={"/user/"+"60f2bd89c6897f3604ef596d"}>My Projects</a>
      <a href="#myProjects">Display Pic</a>
    </div>
  </div>

    <div style={{paddingLeft: 50, paddingRight: 50}}>
  <div className = "container-fluid">
      <h2>Find Ideas, Collaborate together and Build the Portfolio for your Career</h2>
     
  </div>
  <FindPeople style={{display:"flex",justifyContent:"flex-end"}}/>
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
                    <div className="card" style={{borderColor: "#00AA9E"}}>
                      <div className="card-body">
                        <h3 className="card-title">{project.project_name}</h3>
                        <h5 className="card-text">Satus: {project.status}</h5>
                        <p className="card-text">{project.description}</p>
                        <a href={"/projectDetails/"+project._id}>More</a>
                        {(project.owner_id==data.userId)?
                        <button type="button" class="btn btn-primary" style = {{float: 'right'}} onClick={event =>  window.location.href='http://localhost:3000/editProject/'+project._id}>Edit</button>:null}
                      </div>
                    </div>
                    <br/><br/>
                </div>
          );
        })
      }
    </div>
    </div>
    {getSpace()}
    
    <div className="container-fluid">
      <Pagination showPerPage={showPerPage} pageNoChange={pageNoChange} projectCount={projects.length}/>
    </div>
    <pre style = {{background: "white", border: "none"}}>
    </pre>
    {getFooter()}
  </div>
)
}

export default Projects;