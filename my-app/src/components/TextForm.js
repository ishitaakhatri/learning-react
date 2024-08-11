import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("enter text here");
  // setText("new text")
  const handleUpClick = () =>{
    console.log("uppercase was clicked")
    let newText = text.toUpperCase()
    setText(newText)
  }
  const handleOnChange = (event) =>{
    console.log("uppercase was clicked")
    setText(event.target.value)
  }
  return (
    <div>
    <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to upper case</button>
    </div>
  )
}
