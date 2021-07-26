import React from 'react'
import '../styles/projectDetailsDisplay.css'
import '../styles/app.css'
import Footer from './footer';
import RequestButton from './requestButton';



function ProjectDetailsDisplay({project}) {
  const lorem="";
  const project_id=project._id;
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

           <div >
            <div className = "container-fluid" style={{margin:0,padding:0}}>
            <div className="top-color-band"></div>
            </div>
           </div>


           <div className="container">
                <div className="row top-row">
                    <div className="col-md-8 col-sm-8 com-lg-4 main-heading">{project.project_name}</div>
                    <div className="col-md-4 col-sm-12 com-lg-6 ">
                      <RequestButton project={project} /> 
                    </div>
                </div>
                <div className="row category-div">
                  <div className="col-md-4 col-sm-4 col-lg-4">Category :</div>
                  <div className="col-md-8 col-md-8 col-lg-8 domain">{project.domain}</div>
                </div>
                <div className="row category-div">
                  <div className="col-md-4 col-sm-4 col-lg-4">Description :</div>
                  <div className="col-md-8 col-md-8 col-lg-8 domain">{project.description} {lorem}</div>
                </div>
                <hr/>
                <div className="row requirement-main">
                    <div className="col-md-12 col-lg-13 col-sm-12 requirement-heading">requirement :</div>
                    <ul className="container requirement-ul">
                    {
                      project.requirement.map((requirement,index)=>(<li key={index} className="col-md-12 col-lg-13 col-sm-12 requirement-li">{requirement}</li>))
                    }
                    </ul>
                </div>

                <div className="row collaborators-main">
                <div className="col-md-12 col-lg-13 col-sm-12 collaborators-heading">Collaborators :</div>
                <div className="row collaborators-wrapper">
                <div  className="col-md-3 col-sm-6 col-lg-3 collaborators-item-wrapper">
                        <div className="row"><a href='#'>{project.owner_name}</a></div>
                        <div className="row"><a href='#'>(Owner)</a></div>
                    </div>
                  {project.collaborators.map((collaborator)=>(
                    <div key={collaborator.user_id} className="col-md-3 col-sm-6 col-lg-3 collaborators-item-wrapper">
                        <div className="row"><a href='#'>{collaborator.user_name}</a></div>
                    </div>
                  ))}
                
                </div>
                </div>
                
           </div>
           <div className="footer">
           <Footer />
           </div>
        </div>
    )
}

export default ProjectDetailsDisplay
