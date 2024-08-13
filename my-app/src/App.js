import "./App.css";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import { useState } from "react";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";


function App() {
  const [Mode, setMode] = useState('dark')
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }

const toggleMode = ()=>{
  if(Mode === 'light'){
  setMode('dark')
  document.body.style.backgroundColor = '#042743'
  showAlert("dark mode has been enabled","success")
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = "white"
    showAlert("light mode has been enabled","success")
  }
}

  return (
    <>
      <Navbar title="'TEXTuTILS'" mode = {Mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading = "Enter the text to analyze" mode = {Mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
