import React from "react";

export default function Student(props){
    return(
        <div>
        <h1>Hello {props.name}</h1>
        <h1>Your email is {props.email}</h1>
        </div>
    )
}