import React from 'react'
import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom' 
import axios from 'axios';
import ProjectDetailsDisplay from './projectDetailsDisplay';

function ProjectDetails() {
    const {id}=useParams();
    // const query=new URLSearchParams(useLocation().search);
     //console.log(id);
    // console.log(query);
    const [project,setProject]=useState(null);
    const url=process.env.REACT_APP_BACKEND+"/project/"+id;
    //console.log("url="+url);
    const getprojectById=()=>{
        axios.get(url)
        .then((result)=>{
            
            if(result === null || result===undefined)
            {   
                console.log("project is null");
            }
            else
            {
                setProject(result.data);
        }})
        .catch(err=>{
            console.log(err);
            return(
            <>
                <h1>Status 501</h1>
                <h1>Internal Server error</h1>
            </>)
        })
    }
    useEffect(() => getprojectById(), []);

    return (
        <div >
            
            {project && <ProjectDetailsDisplay project={project}/>}
        </div>
    )
}

export default ProjectDetails
