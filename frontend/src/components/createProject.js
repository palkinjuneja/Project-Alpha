import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './footer';
import '../stylesheet/app.css'


function CreateProject(props) {

    let [project, setData] = useState({
        project_name: "",
        owner: "Nayan",
        description: "",
        domain: "",
        owner_id: "60d77445f6098441c5c3d439",
        requirements: "",
        status: "Open"
    })

    const [projectError, setError] = useState({
        project_name: "",
        description: "",
        domain: "",
        requirements: "",
    })
    
    const getInputs = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        console.log(name, value);
        setData({...project, [name]: value});
    }   

    const onSubmit = (event)=>{
        event.preventDefault();
        if(project.project_name === "")
        {
            setError((prevErr)=>{
                return {...prevErr, project_name:"Project Name can't be empty."}
            })
        }
        if(project.description == "")
        {
            setError((prevErr)=>{
                return {...prevErr, description:"Description can't be empty."}
            })
        }
        if(project.domain == "")
        {
            setError((prevErr)=>{
                return {...prevErr, domain:"Domain can't be empty."}
            })
        }
        if(project.requirements == "")
        {
            setError((prevErr)=>{
                return {...prevErr, requirements:"Requirements can't be empty."}
            })
        }
        if(project.project_name !== "" && project.description !== "" && project.domain !== "" && project.requirements !== "")
        {
            console.log(project);
            
            const x = project.requirements;
            console.log("?", x);

            // let arr = x.split(",");

            const projectData = {
                project_name: project.project_name,
                owner: "Nayan",
                description: project.description,
                domain: project.domain,
                owner_id: "60d77445f6098441c5c3d439",
                requirement: project.requirements.split(","),
                status: project.status
            }

            console.log("??", projectData);
            
            axios.post("http://localhost:5000/project/create", projectData)
            .then(res=>{
                console.log(res.data)
                window.location="http://localhost:3000/project";
            }
            )
    		.catch(err=>console.log("Error: "+err));

        }
    }

    return (
        <div>
          <div className="topnav">
          <span style={{paddingLeft: 60}}>
            <span style={{fontSize:37, color:"pink"}}>O</span><span style={{fontSize:27, color:"white"}}>union</span>
          </span>
    <div className="topnav-right" style={{paddingRight: 63}}>
      <a href={"/project/"}>Home</a>
      <a href={"/user/"+"60f2bd89c6897f3604ef596d"}>My Projects</a>
      <a href="#myProjects">Display Pic</a>
    </div>
  </div>

    <div style={{paddingLeft: 50, paddingRight: 50}}>
    <pre style = {{background: "white", border: "none"}}></pre>
    <pre style = {{background: "white", border: "none"}}></pre>

    <div className="">
        <form onSubmit={onSubmit}>
            <div class="form-group">
                <div>
                    <label htmlFor="project_name">Project Name</label> <span style={{color: "red"}}>{projectError.project_name}</span>
                    <input type="text" class="form-control" autoComplete="off" value={project.project_name} onChange={getInputs} name="project_name"/>
                </div><br/>
                <div>
                    <label htmlFor="description">Description</label> <span style={{color: "red"}}>{projectError.description}</span>
                    <input type="text" class="form-control" autoComplete="off" value={project.description} onChange={getInputs} name="description"/>
                </div><br/>
                <div>
                    <label htmlFor="domain">Domain</label> <span style={{color: "red"}}>{projectError.domain}</span>
                    <input type="text" class="form-control" autoComplete="off" value={project.domain} onChange={getInputs} name="domain"/>
                </div>
                <br/>
                <div>
                    <label htmlFor="requirements">Requirements</label> <span> (comma separated values. e.g HTML, CSS, JS) </span> <span style={{color: "red"}}>{projectError.requirements}</span>
                    <input type="text" class="form-control" autoComplete="off" value={project.requirements} onChange={getInputs} name="requirements"/>
                </div>
                <br/>
                <div>
                    <label htmlFor="status">Status <span style={{paddingRight: 10}}></span>
                        <select style={{padding: 5, borderRadius: 5, borderColor: 'grey'}} autoComplete="off" value={project.status} onChange={getInputs} name="status">
                            <option value="Open">Open</option>
                            <option value="Closed">Closed</option>
                        </select>
                    </label>
                </div><br/>
            </div>
            <input type="submit" class="btn btn-primary" value="Submit"/>
        </form>
    </div>
    
    </div>
    
    <pre style = {{background: "white", border: "none"}}>

    </pre>
    
    <pre style = {{background: "white", border: "none"}}>

    </pre>

    <pre style = {{background: "white", border: "none"}}>

    </pre>
    
    <pre style = {{background: "white", border: "none"}}>

    </pre>
    <pre style = {{background: "white", border: "none"}}>

    </pre>
    <br/>
    <Footer />
  </div>
)
}

export default CreateProject;