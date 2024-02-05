import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import { useState } from 'react';
import Alert from './Components/Alert';


function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  return (
    <>
    <Navbar title="TextModifier" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container ">
    <TextArea showAlert={showAlert} heading="Enter the text Below" mode={mode}/>
    </div>
    
    </>
    
  );
}

export default App;
