import React from 'react';

export default function Image(props){
    return(
        <div>
            <h1>This is {props.title}</h1>
            <img src={props.image} alt="tempstring" height="150" width="150"/>
        </div>
    )
}