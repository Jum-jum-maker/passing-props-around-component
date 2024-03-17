
import React from 'react'
import TextLength from './textLength';


import { useState } from 'react'

function Input() {

  const [textLength, setTextLength] = useState(0)

  const textHandler = (text) => {
  setTextLength(text.target.value.length);
};


return (
  <>
      <h1>Enter  a text</h1>

      <div> <input type="text" onChange={textHandler}  />
      <h2> {textLength} </h2>

       </div>
       <TextLength myProp={textLength}/>
  </>
  )
}

export default Input;