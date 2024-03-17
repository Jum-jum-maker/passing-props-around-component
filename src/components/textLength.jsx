import React from "react";
import Input from "./Person";
import TextLengthDisplay from "./textLengthDisplay";

function TextLength({myProp}){
    return(
        <>
        <p>length of the text entered:{myProp}</p>

        <TextLengthDisplay textLength={myProp} />
        </>
    )
}
export default TextLength