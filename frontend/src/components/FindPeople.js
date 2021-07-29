import React from 'react'

function FindPeople() {
    const onClickFindPeopleButton=event=>{
        window.location.href='/User';
        console.log("User Updated")
    }
    return (
        <div >
            <button   name="findPeopleButton"onClick={onClickFindPeopleButton}>See who's on Union</button>
        </div>
    )
}

export default FindPeople
