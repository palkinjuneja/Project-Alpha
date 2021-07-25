import React from 'react'
import '../styles/NavBar.css'

function NavBar({middleText}) {
    const data = JSON.parse(localStorage.getItem('userDetails'))
    return (
        <div>
            <div className='navBarRow'>
                <div className='navBarColumn_Left'>
                    <span className='navBarColumn_Left_U'>U</span><span className='navBarColumn_Left_Union'>union</span>
                </div>
                <div className='navBarColumn_Mid'>{middleText? middleText : ""}</div>
                <div className='navBarColumn_Right'>
                    <a className ='navBarProject' href={"/user/"+"60f2bd89c6897f3604ef596d"}>My Projects</a>
			        <a className ='navBarUser' href="#myProjects">
                        {/* <img src={data.photo} height="10px" width="10px"/> */}
                    </a>
                </div>
		    </div>
        </div>
    )
}

export default NavBar


