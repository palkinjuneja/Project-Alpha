import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './pagination';
import Footer from './footer';
import '../styles/app.css'
import NavHeader from './navHeader';
import FindPeople from './FindPeople';


function Projects(props) {

    const [projects, setState] = useState([]);
    const data = JSON.parse(localStorage.getItem('userDetails'));

    const getData = async ()=>{
       try{
          //Fetch Projects
          const res = await axios.get(process.env.REACT_APP_BACKEND+"/project/");
          setState(res.data);
       }
       catch(err){
         console.log(err);
       }
    }
    
    useEffect(() => getData(), []);

    const [showPerPage, setPerPage] = useState(8);
    const [pageNumber, setPageNumber] = useState({ start: 0, end: showPerPage, cnt: 0});  

    const pageNoChange = (start, end, cnt)=>{
      
      setPageNumber((prevState)=>{
        return {...prevState, start:start, end:end, cnt: cnt}
      });
    }

    const getSpace = () =>{
      if(pageNumber.cnt==1){
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
      if(pageNumber.cnt==0){
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
            <pre style = {{background: "white", border: "none"}}>
              
            </pre>
          </>
        )
      }
    }

    const getFooter = () =>{
      if(pageNumber.cnt === 1){
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

    const getPagination = () =>{
      if(projects.length){
        return(
          <Pagination showPerPage={showPerPage} pageNoChange={pageNoChange} projectCount={projects.length}/>
        )
      }
    }

    const getDiv = () =>{
      if(projects.length){
        return(
          projects.slice(pageNumber.start,pageNumber.end).map((project) => {
            return (
              <div className="col-sm-10" key={project._id}>
                      <div className="card" style={{borderColor: "#00AA9E"}}>
                        <div className="card-body" style={{paddingTop: "2%", paddingBottom: "2%"}}>
                          <h3 className="card-title">{project.project_name}</h3>
                          <h5 className="card-text">Satus: {project.status}</h5>
                          <p className="card-text">{project.description}</p>
                          <a href={"/projectDetails/"+project._id}>More</a>
                          {(project.owner_id==data.userId)?
                        <button type="button" class="btn btn-primary" style = {{float: 'right'}} onClick={event =>  window.location.href='/editProject/'+project._id}>Edit</button>:null}
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
              <h1 style={{color: "green" , textAlign: "center"}}>Please Create One</h1>
            </div>
        )
      }
    }

    return (
        <div>
         <NavHeader middleText=""/>

    <div style={{paddingLeft: 50, paddingRight: 50}}>
  <div className = "container-fluid">
      <h2>Find Ideas, Collaborate together and Build the Portfolio for your Career</h2>
  </div>

  <pre style = {{background: "white", border: "none"}}>

  </pre>
 
  <div className="container-fluid ">
  
  <h2 style={{textAlign: "center"}} >Project Lists</h2>
  </div>
  <pre style = {{background: "white", border: "none"}}>
  {/* <FindPeople/> */}
  <div className="container-fluid align-content-center justify-content-center" style={{paddingLeft:"14%"}}>
  
  <div class="row">
    <button type="button" class="btn btn-dark col-sm-12 col-md-3 col-lg-2 btnHover m-2  " style = {{float:'right', marginBottom:20 , height:'50px'}}  onClick={event =>  window.location.href='/User'}>See who's on Union</button>
    <button type="button" class="btn btn-dark col-sm-12 col-md-3 col-lg-2 btnHover m-2 " style = {{ float:'right',margmarginBottom:20,height:'50px'}} onClick={event =>  window.location.href='/createProject'}>Create Project</button>
  </div>
  </div>
  </pre>
    <div className="container-fluid">
   
      <div style={{text: "center", paddingLeft: `${projects.length? "13%": 0}`}}>
    
      
      {
        getDiv()
      }
      
      

      </div>
    </div>
    </div>
    {getSpace()}
    <div className="container-fluid">
      {getPagination()}
    </div>
    {getFooter()}
  </div>
)
}

export default Projects;