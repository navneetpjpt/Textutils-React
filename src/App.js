import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState }  from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";



export default function() {
  const [mode,setMode] = useState('light');  // Whether dark mode is enabled or not
  const [alert,setAlert] = useState(null);
  
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=> {
      setAlert(null);
    },1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode ('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    //   setInterval(()=>{
    //     document.title = "TextUtils is Amazing!";
    //   },2000);
    //   setInterval(()=>{
    //     document.title = "Install TextUtils Now!";
    //   },1500);
    }
    else  {
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils"/>  */}
    {/* <Navbar/> */}
    {/* <Router> */}
    
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container">
      {/* <Routes> */}
          {/* <Route exact path="/about"element={<About/>}>
          </Route>
          <Route exact path="/"element={< TextForm  heading="Enter the text to analyze below:-" mode={mode}showAlert={showAlert}/>}> */}
          < TextForm showAlert={showAlert} heading="Enter the text to analyze below:-" mode={mode}/>
          {/* </Route> */}
          {/* </Routes> */}
        </div>
      
      {/* // </Router> */}
    </>
  );
} 

