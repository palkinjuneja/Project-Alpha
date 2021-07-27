import React from 'react'

function FindPeople() {
    const onClickFindPeopleButton=event=>{
        window.location.href='/User';
        console.log("User Updated")
    }
    return (
        <div >
            <button  style={{height:'35px' , padding: '10px' ,color:'white', backgroundColor:'black', textAlign:'center'}} name="findPeopleButton"onClick={onClickFindPeopleButton}>See who's on Union</button>
        </div>
    )
}

export default FindPeople
