import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // setText("new text")
  const handleUpClick = () => {
    console.log("uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase!","success")
  };
  const handleloClick = () => {
    console.log("uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase!","success")
  };
  const handleOnChange = (event) => {
    console.log("uppercase was clicked");
    setText(event.target.value);
  };
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          style={{backgroundColor: props.mode==='light'?'white':'grey', color:props.mode==='dark'?'white':'black'}}
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert to upper case
      </button>
      <button className="btn btn-primary mx-1" onClick={handleloClick}>
        Convert to lower case
      </button>
    </div>
    <div className="container" my-3 style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} minutes read</p>
      <h2>PREVIEW</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
