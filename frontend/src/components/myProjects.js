import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './footer';
import '../stylesheet/app.css'

function MyProject(props) {

  const [projects, setProjects] = useState([]);

    const getData = async()=>{
      const res = await axios.get("http://localhost:8000/user/"+props.match.params.id);
      if(res != "")
      {
        // setProjectIds(res.data.project_id);
        let tmp = [];
        res.data.project_id.map(async(id)=>{
          let res1 = await axios.get("http://localhost:8000/project/"+id);
          if(res1 != "")
          {
            // console.log("Hello1", res1.data);
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

    return (
        <div>
          <div className="topnav">
          <span style={{paddingLeft: 60}}>
            <span style={{fontSize:37, color:"pink"}}>O</span><span style={{fontSize:27, color:"white"}}>union</span>
          </span>
    <div className="topnav-right" style={{paddingRight: 63}}>
      {/* <a href={"/user/"+"60f29250819c5800e83a0c18"}>My Projects</a> */}
      <a href="http://localhost:3000/project">Home</a>
      <a href="#myProjects">Display Pic</a>
    </div>
  </div>

    <div style={{paddingLeft: 50, paddingRight: 50}}>
  <div className = "container-fluid">
      {/* <h3>Find Ideas, Collaborate together and Build the Portfolio for your Career</h3> */}
  </div>

  <pre style = {{background: "white", border: "none"}}>

  </pre>
  <pre style = {{background: "white", border: "none"}}>
  </pre>
  <h3 className="container-fluid">My Projects</h3>
  <pre style = {{background: "white", border: "none"}}>

  </pre>

    <div className="container-fluid">
      {
        projects.map((project) => {
          return (
            <div className="col-sm-3" key={project._id}>
                    <div className="card">
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
      }
    </div>
    {/* <div className="container-fluid">
    <Pagination showPerPage={showPerPage} pageNoChange={pageNoChange} projectCount={projects.length}/>
    </div> */}
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
    <Footer />
  </div>
)
}

export default MyProject;







