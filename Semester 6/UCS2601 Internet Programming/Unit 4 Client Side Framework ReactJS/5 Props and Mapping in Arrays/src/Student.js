import React from 'react';


/*syntax is props.idvariablefromapp.map(mapVar=>{return(<li>{mapVar.objectfeature}</li>)})*/




export default function Student(props){
    return(
        <div>
            <ul>

            
            {props.studentDetails.map(mapVar=> {return (<li>{mapVar.name} - {mapVar.id}</li>)})}
            </ul>
        </div>
    )
}