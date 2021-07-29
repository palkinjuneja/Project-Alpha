import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './footer';
import '../styles/app.css';
import NavHeader from './navHeader'


function EditProject(props) {
    const data = JSON.parse(localStorage.getItem('userDetails'))
    let [project, setData] = useState({
        project_name: "",
        owner: data.name,
        description: "",
        domain: "",
        owner_id: data.userId,
        requirement: "",
        status: "Open"
    })

    const [projectError, setError] = useState({
        project_name: "",
        description: "",
        domain: "",
        requirement: "",
    })
    
    const getInputs = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
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
        if(project.description === "")
        {
            setError((prevErr)=>{
                return {...prevErr, description:"Description can't be empty."}
            })
        }
        if(project.domain === "")
        {
            setError((prevErr)=>{
                return {...prevErr, domain:"Domain can't be empty."}
            })
        }
        if(project.requirement === "")
        {
            setError((prevErr)=>{
                return {...prevErr, requirement:"requirement can't be empty."}
            })
        }
        if(project.project_name !== "" && project.description !== "" && project.domain !== "" && project.requirement !== "")
        {
            let reqArray = project.requirement.split(","); 
            for(let i=0;i<reqArray.length;i++)
                reqArray[i]=reqArray[i].trim();

            const projectData = {
                project_name: project.project_name,
                description: project.description,
                domain: project.domain,
                requirement: reqArray,
                status: project.status
            }

            axios.put(process.env.REACT_APP_BACKEND+"/project/editProject/"+props.match.params.id, projectData)
            .then(res=>{
                window.location="/project";
            }
            )
    		.catch(err=>console.log("Error: "+err));
        }
    }


    const getData = async ()=>{
        const res = await axios.get(process.env.REACT_APP_BACKEND+"/project/"+props.match.params.id);
        const project = res.data;

        if(project !== ""){
            let req = "", reqLength = project.requirement.length;
            const reqArray = project.requirement;

            for(let i=0;i<reqLength;i++)
            {
                if(i!=reqLength-1)
                    req=req+reqArray[i].trim()+", ";
                else req=req+reqArray[i];
            }

            setData({
                project_name: project.project_name,
                owner: project.owner,
                description: project.description,
                domain: project.domain,
                owner_id: project.owner_id,
                requirement: req,
                status: project.status
            });
        }
    }

    useEffect(()=>getData(),[]);

    return (
        <div>
         <NavHeader middleText="Edit Project"/>

    <div style={{paddingLeft: 50, paddingRight: 50}}>
    <pre style = {{background: "white", border: "none"}}></pre>
    <pre style = {{background: "white", border: "none"}}></pre>

    <div className="alignForm">
        <form onSubmit={onSubmit} className="container">
            <div className="form-group col-md-6">
                <div>
                    <label htmlFor="project_name">Project Name</label> <span style={{color: "red"}}>{projectError.project_name}</span>
                    <input type="text" className="form-control" autoComplete="off" value={project.project_name} onChange={getInputs} name="project_name"/>
                </div><br/>
                <div>
                    <label htmlFor="description">Description</label> <span style={{color: "red"}}>{projectError.description}</span>
                    <input type="text" className="form-control" autoComplete="off" value={project.description} onChange={getInputs} name="description"/>
                </div><br/>
                <div>
                    <label htmlFor="domain">Domain</label> <span style={{color: "red"}}>{projectError.domain}</span>
                    <input type="text" className="form-control" autoComplete="off" value={project.domain} onChange={getInputs} name="domain"/>
                </div>
                <br/>
                <div>
                    <label htmlFor="requirement">requirement</label> <span> (comma separated values. e.g HTML, CSS, JS) </span> <span style={{color: "red"}}>{projectError.requirement}</span>
                    <input type="text" className="form-control" autoComplete="off" value={project.requirement} onChange={getInputs} name="requirement"/>
                </div>
                <br/>
                <div>
                    <label htmlFor="status">Status <span style={{paddingRight: 10}}></span>
                        <select style={{padding: 5, borderRadius: 5, borderColor: '#c0c0c0', fontWeight: "normal"}} autoComplete="off" value={project.status} onChange={getInputs} name="status">
                            <option value="Open">Open</option>
                            <option value="Closed">Closed</option>
                        </select>
                    </label>
                    <input type="submit" className="btn btn-primary" value="Update" style={{marginLeft: 19}}/>
                </div>
            </div>
        </form>
    </div>
    
    </div>
    <br/>

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

    <pre style = {{background: "white", border: "none"}}>

    </pre>

    <div className="stickBttm">
        <Footer />
    </div>
  </div>
)
}

export default EditProject;