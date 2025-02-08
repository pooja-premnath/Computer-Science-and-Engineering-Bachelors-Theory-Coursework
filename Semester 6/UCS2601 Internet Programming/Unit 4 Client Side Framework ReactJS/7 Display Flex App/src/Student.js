import React from "react";

export default function Student(props){
    return(
        <div id="main">
        
        {props.studentDetails.map(mapVar=>{return (<div id="element"> {mapVar.id} <br/> {mapVar.name} <br/> {mapVar.email}</div>)})}
        
        </div>
    )
}