import { useState } from 'react';
import './App.css';
import About from './component/About';
import Form from './component/Form';
import Navbar from './component/Navbar';
import Alert from './component/Alert';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



// let a = "Nancy";
// let a = "Nancy"; // both declare and define
// let x; //decalare;


function App() {
  const [mode, setMode]  = useState('light');
  const [alert, setAlert] = useState(null);
 
  // this is the way to create the javascript function in react way
  const showAlert = (msg, type)=>{
    setAlert({
      msg: msg,
      type: type,
    })

   setTimeout(() => {
      setAlert(null)
   }, 2000);
  }
 
  const setToggle = ()=>{
       
    if(mode == "light"){
      setMode('dark');
      document.body.style.backgroundColor = "#0d1c31";
      showAlert('Dark mode has been enabled', 'success');
    }else{
      setMode('light');
      document.body.style.backgroundColor = "#fff";
      showAlert('Light mode has been enabled', 'success');
    }

  }

  const [logo, setLogo] = useState("Textutils");

  const setLogoToggle = ()=>{
    if(logo == "Textutils"){
      setLogo("Alpha");
    }else{
      setLogo("Textutils");
    }
  }
  return (
      <Router>
        <Navbar title="textUtils" aboutText="About Us" mode={mode} toggle={setToggle} logoToggle={setLogoToggle} logo={logo}/>
        <Alert mode={mode} alert={alert} />
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={ <Form  alert={showAlert} mode={mode} />} />
            <Route path="/about" element={<About title="About Us" mode={mode} />} />
          </Routes>
        </div> 
    </Router>

  );
}

export default App;