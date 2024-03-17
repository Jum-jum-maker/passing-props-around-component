import React from "react";


function TextLengthDisplay({textLength}){
    let message= ""
    if(textLength <5){
        message= "text is too short"
    }else if(textLength >20){
        message= "text is too long"
    } else {
        message="text length is alright"
    }

    return(
        <>
        <h3>The length of the entered text:{textLength}</h3>
        <p>{message}</p>
        </>
    )
}

export  default TextLengthDisplay 