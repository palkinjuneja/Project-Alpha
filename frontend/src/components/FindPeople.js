import React from 'react'
import '../styles/app.css';

function FindPeople() {
    const onClickFindPeopleButton=event=>{
        window.location.href='/User';
        console.log("User Updated")
    }
    return (
        <div >
            <button type="button" class="btn btn-dark btnHoverFind"style={{backgroundColor:"black", color:"white" , border:"1px solid white" }}   name="findPeopleButton"onClick={onClickFindPeopleButton}>Find People</button>
        </div>
    )
}

export default FindPeople
