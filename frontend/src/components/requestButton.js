import axios from 'axios';
import React from 'react'
import {useState,useEffect} from 'react'
import '../stylesheet/requestButton.css'
function RequestButton({project_id}) {

    const senderId="60fc2729706aea482be968e0";
    const recieverId="60fc2740ac407653808b9250";

    const url="http://localhost:8000/request/";
    const [isRequestSent,setIsRequestSent]=useState(false);
    const [requestId,setRequestId]=useState(null);

    const onclickHandler=()=>{
        if(isRequestSent){
            cancelRequest();
        }
        else{
            sendRequest();
        }
    }

    const sendRequest=()=>{
        document.getElementById("request-button").innerHTML="Sending...";
        axios
        .post(url+'create',{
            project_id:project_id,
            sender:senderId,
            receiver:recieverId,
            status_of_request:"pending"
        })
        .then((response)=>{
            if(response.data.status==='success'){
                setIsRequestSent(true);
                setRequestId(response.data.result._id);
                document.getElementById("request-button").innerHTML="Cancel";
            }
            else{
                document.getElementById("request-button").innerHTML="Request +";
                console.log('request failed sendrequest');
            }
        })
        .catch((error)=>{
            document.getElementById("request-button").innerHTML="Request +";
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
                document.getElementById("request-button").innerHTML="Request +";
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
        .get("http://localhost:8000/request/"+senderId+'/'+project_id)
        .then((response)=>{
            if(response.data.isExist){
                setIsRequestSent(true);
                setRequestId(response.data.result._id);
                document.getElementById("request-button").innerHTML="Cancel";
            }
            else{
                setIsRequestSent(false);
                setRequestId(null);
                document.getElementById("request-button").innerHTML="Request +";
            }
        })
        .catch((err)=>{
            console.log(err);
        });
    },[])
    return (
        <div>
            <button onClick={onclickHandler} id="request-button">Loading...</button> 
        </div>
    )
}

export default RequestButton
