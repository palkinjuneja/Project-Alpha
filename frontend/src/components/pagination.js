import React, { useState, useEffect} from 'react';

function Pagination({showPerPage, pageNoChange, projectCount}) {

    const [counter, setCounter] = useState(1);
    const [noOfPages, setnoOfPages] = useState(Math.ceil(projectCount/showPerPage));

    useEffect(() => {   
        setnoOfPages(Math.ceil(projectCount/showPerPage));
        const end = showPerPage * counter;
        const start = end-showPerPage;
        pageNoChange(start, end);
    }, [counter, noOfPages])

    const onButtonClick = (type) =>{
        if(type === "prev"){
            if(counter === 1)
                setCounter(1);
            else
                setCounter(counter-1);
        }
        else if(type === "next"){
            if(counter < noOfPages)
                setCounter(counter+1);
        }
    };

    return (
        <div className="d-flex justify-content-center">
            <nav aria-label="Page navigation">
            <ul className="pagination">
                <li className="page-item"><a className="page-link" href="#" onClick={()=>onButtonClick("prev")}>Previous</a></li>
                {
                    new Array(Math.ceil(projectCount/showPerPage)).fill("0").map((element, index)=>{
                        return(
                            <li className={`page-item ${index+1 === counter?"active":null}`}>
                                <a className="page-link" href="#" onClick={()=>setCounter(index+1)}>{index+1}</a>
                            </li>
                        )
                    })
                }
                <li className="page-item"><a className="page-link" href="#" onClick={()=>onButtonClick("next")}>Next</a></li>
            </ul>
            </nav>
        </div>
    )
}

export default Pagination;
