import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './footer';
import Pagination from './pagination';
import '../styles/app.css'
import NavHeader from './navHeader'

function MyProject(props) {

  const [projects, setProjects] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem('userDetails'))

  const [showPerPage, setPerPage] = useState(4);
    const [pageNumber, setPageNumber] = useState({ start: 0, end: showPerPage, cnt: 0});  

    const pageNoChange = (start, end, cnt)=>{
      setPageNumber((prevState)=>{
        return {...prevState, start:start, end:end, cnt: cnt}
      });
    }

    const getData = async()=>{
      const res = await axios.get(process.env.REACT_APP_USER_ID+currentUser.userId);
      if(res !== "")
      {
        console.log("result is "+res)
        let tmp = [];
        res.data.project_id.map(async(id)=>{
          let res1 = await axios.get(process.env.REACT_APP_BACKEND+"/project/"+id);
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
            <pre style = {{background: "white", border: "none"}}>
              
            </pre>
            <pre style = {{background: "white", border: "none"}}>
              
            </pre>
          </>
        )
    }
  }

    const getDiv = () =>{
      if(projects.length){
        return (
          projects.slice(pageNumber.start,pageNumber.end).map((project) => {
            return (
              <div className="col-sm-12" key={project._id}>
                      <div className="card" style={{borderColor: "#00AA9E"}}>
                        <div className="card-body" style={{paddingTop: "2%", paddingBottom: "2%"}}>
                          <h3 className="card-title">{project.project_name}</h3>
                          <h5 className="card-text">Satus: {project.status}</h5>
                          <p className="card-text">{project.description}</p>
                          <a href={"/projectDetails/"+project._id}>More</a>
                          <button type="button" class="btn btn-primary" style = {{float: 'right'}} onClick={event =>  window.location.href='/editProject/'+project._id}>Edit</button>
                        </div>
                      </div>
                      <br/><br/>
                  </div>
            );
          }
          )
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

    const getPagination = () =>{
      if(projects.length){
        return(
          <Pagination showPerPage={showPerPage} pageNoChange={pageNoChange} projectCount={projects.length}/>
        )
      }
    }

    return (
        <div>
         <NavHeader middleText=""/>

    <div style={{paddingLeft: 50, paddingRight: 50}}>
  <div className = "container-fluid">
  

  <pre style = {{background: "white", border: "none"}}>

  </pre>
  <pre style = {{background: "white", border: "none"}}>
  </pre>
  <div className="container-fluid">
  <h2 className="container-fluid" style={{textAlign: "center"}} >My Projects</h2>
  </div>
  <pre style = {{background: "white", border: "none"}}>

  </pre>

    <div className="container-fluid" style={{text: "center", width: "70%"}}>
    { getDiv() }
    </div>
    </div>
    </div>
    {getSpace()}
    <div className="container-fluid">
      {getPagination()}
    </div>
    <div className="stickBttm">
      <Footer />
    </div>
  </div>
)
}

export default MyProject;
