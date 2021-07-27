import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './footer';
import '../styles/app.css'

function MyProject(props) {

  const [projects, setProjects] = useState([]);

    const getData = async()=>{
      const res = await axios.get("http://localhost:9000/user/"+props.match.params.id);
      if(res !== "")
      {
        let tmp = [];
        res.data.project_id.map(async(id)=>{
          let res1 = await axios.get("http://localhost:9000/project/"+id);
          if(res1 !== "")
          {
            let tmp1 = [...tmp, res1.data];
            setProjects(tmp1);
            tmp = tmp1;
          }
        })
      }
    }

    useEffect(() =>{
      getData();
    }, []);


    const getDiv = () =>{
      if(projects.length){
        return (
          projects.map((project) => {
            return (
              <div className="col-sm-3" key={project._id}>
                      <div className="card" style={{borderColor: "#00AA9E"}}>
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
        )
      }
      else{
        return(
          <div>
            <h1 style={{color: "red" , textAlign: "center"}}>No Projects Found!!</h1>
            <h1 style={{color: "green" , textAlign: "center"}}>Please Start Collaborating</h1>
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
      <a href="http://localhost:3000/project">Home</a>
      <a href={"http://localhost:3000/user/"+props.match.params.id} className="active">My Projects</a>
      <a href="#myProjects">Display Pic</a>
    </div>
  </div>

    <div style={{paddingLeft: 50, paddingRight: 50}}>
  <div className = "container-fluid">
  </div>

  <pre style = {{background: "white", border: "none"}}>

  </pre>
  <pre style = {{background: "white", border: "none"}}>
  </pre>
  <h3 className="container-fluid">My Projects</h3>
  <pre style = {{background: "white", border: "none"}}>

  </pre>

    <div className="container-fluid">
    { getDiv() }
    </div>
    </div>
    <div className="stickBttm">
      <Footer />
    </div>
  </div>
)
}

export default MyProject;