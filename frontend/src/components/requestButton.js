import axios from 'axios';
import React from 'react'
import {useState,useEffect} from 'react'
import '../styles/requestButton.css'

function RequestButton({project}) {

    const data = JSON.parse(localStorage.getItem('userDetails'))
    let project_id = project._id;

    const senderId=data.userId;
    const recieverId=project.owner_id;

    const url=process.env.REACT_APP_BACKEND+"/request/";
    const [isRequestSent,setIsRequestSent]=useState(false);
    const [requestId,setRequestId]=useState(null);
    let [requestStatus,setRequestStatus]=useState(null);

    const onclickHandler=()=>{
        if(isRequestSent){
            cancelRequest();
        }
        else{
            sendRequest();
        }
    }

    const ownershipRequestCheck=()=>{
        if("Project Union"==project.owner)
        {
            document.getElementById("request-button").innerHTML="Request Ownership";
        }
    }

    const sendRequest=()=>{
        document.getElementById("request-button").innerHTML="Sending...";
        axios
        .post(url+'create',{
            project_id: project_id,
            sender:senderId,
            receiver:recieverId,
            status_of_request:"pending"
        })
        .then((response)=>{
            if(response.data.status==='success'){
                setIsRequestSent(true);
                setRequestId(response.data.result._id);
                setRequestStatus(response.data.result.status_of_request);
                document.getElementById("request-button").innerHTML="Cancel";
            }
            else{
                document.getElementById("request-button").innerHTML="Request +";
                ownershipRequestCheck();
                console.log('request failed sendrequest');
            }
        })
        .catch((error)=>{
            document.getElementById("request-button").innerHTML="Request +";
            ownershipRequestCheck();
            console.log('error');
        })
    }

    const cancelRequest=()=>{
        document.getElementById("request-button").innerHTML="wait..."
        
        axios
        .delete(url+requestId)
        .then((response)=>{
            if(response.data.status==='success'){
                setIsRequestSent(false);
                setRequestId(null);
                setRequestStatus(null);
                document.getElementById("request-button").innerHTML="Request +";
                ownershipRequestCheck();
            }
            else{
                document.getElementById("request-button").innerHTML="Cancel";
                console.log('request failed cancelrequest');
            }
        })
        .catch((error)=>{
            document.getElementById("request-button").innerHTML="Cancel";
            console.log('error');
        })
    }

    useEffect(()=>{
        axios
        .get(process.env.REACT_APP_BACKEND+"/request/"+senderId+'/'+project_id)
        .then((response)=>{
            if(response.data.isExist){
                setIsRequestSent(true);
                setRequestId(response.data.result._id);
                setRequestStatus(response.data.result.status_of_request);
                document.getElementById("request-button").innerHTML="Cancel";
            }
            else{
                setIsRequestSent(false);
                setRequestId(null);
                setRequestStatus(null);
                document.getElementById("request-button").innerHTML="Request +";
                ownershipRequestCheck();
            }
        })
        .catch((err)=>{
            console.log(err);
        });
    },[])
    const renderButton =()=>{
        if((!requestStatus || requestStatus=='pending') && project.status=='Open' && project.owner_id !=data.userId)
            return <button onClick={onclickHandler} id="request-button">Loading...</button>;
        return null;
    }

    

    return (
        <div>
            { renderButton() }            
        </div>
    )
}

export default RequestButton
