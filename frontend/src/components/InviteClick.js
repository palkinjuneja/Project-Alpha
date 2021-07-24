import React from 'react'
import InviteAction from './InviteAction';
import InviteAccepted from './InviteAccepted';
import InviteDeclined from './InviteDeclined'

function InviteClick() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
      };
    
     const skill =["Java","Python"]
    return (
        <div>
            <div>
                <button type="button" onClick={handleOpen}>
                {open ? <InviteAction modalAction={open} userName="Palkin Juneja" userRole="Software Developer" 
                skills={skill} userImage="Image" projectId="1234" collaborationId="1234" userId= "3345" ownerName="currentUser"ownerId="currentUserId" userLinkedIn="http://linkedin.com" userEmail="palkinjuneja1234@gmail.com"/>: null}
                </button>
                {/* {open ? <InviteAccepted modalAction={open} projectId="1234" projectName="Test" userId="1234" ownerName="Palkin" ownerId=""  ownerLinkedIn="http://linkedin.com/palkinjuneja" ownerEmail="palkinjuneja1234@gmail.com" ownerRole="Lead"/>:<p></p>}
                </button> */}
                

                {/* {open ? <InviteDeclined modalAction={open} projectId="1234" projectName="Union Collaboration" userId="1234" ownerName="Palkin Juneja" ownerId=""  ownerLinkedIn="http://linkedin.com/palkinjuneja" ownerEmail="palkinjuneja1234@gmail.com" ownerRole="Project Lead"/>:<p></p>}
                </button>  */}
            </div>
        </div>
    )
}

export default InviteClick
