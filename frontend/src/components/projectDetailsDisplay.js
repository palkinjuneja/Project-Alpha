import React from 'react'
import '../styles/projectDetailsDisplay.css'
import Footer from './footer';
import RequestButton from './requestButton';
import NavHeader from './navHeader';



function ProjectDetailsDisplay({project}) {
  const lorem="";
  const project_id=project._id;
    return (
        <div>
             <NavHeader middleText={"Project "+project.project_name}/>

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
                
                  {project.collaborators.map((collaborator)=>(
                    <div key={collaborator.user_id} className="col-md-3 col-sm-6 col-lg-1 collaborators-item-wrapper">
                        <div className="row"><a href={'/User/'+collaborator.user_id}>{collaborator.name}</a></div>
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
