import React from 'react'
import '../stylesheet/projectDetailsDisplay.css'
import '../stylesheet/app.css'
import Footer from './footer';
import RequestButton from './requestButton';



function ProjectDetailsDisplay({project}) {
  const lorem="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
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
                      <RequestButton project_id={project_id} /> 
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
                    <div className="col-md-12 col-lg-13 col-sm-12 requirement-heading">Requirements :</div>
                    <ul className="container requirement-ul">
                    {
                      project.requirements.map((requirement,index)=>(<li key={index} className="col-md-12 col-lg-13 col-sm-12 requirement-li">{requirement}</li>))
                    }
                    </ul>
                </div>

                <div className="row collaborators-main">
                <div className="col-md-12 col-lg-13 col-sm-12 collaborators-heading">Collaborators :</div>
                <div className="row collaborators-wrapper">
                  {project.collaborators.map((collaborator)=>(
                    <div key={collaborator.user_id} className="col-md-3 col-sm-6 col-lg-3 collaborators-item-wrapper">
                        <div className="row"><img scr="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" className="collaborator-img"></img></div>
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
