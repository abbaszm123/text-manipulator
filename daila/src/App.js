
import './App.css';
import { useState } from 'react';
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
  
  Route,
  
  Routes
} from "react-router-dom";


import Main from './componenets/Main';
import Forms from './componenets/Forms'
import About from './componenets/About';
import Alert from './componenets/Alert';



function App() {

  const [Mode, setMode] = useState('light')
  const [alert, setAlert] = useState("")

  const handleAlert= (type,message) =>{
    setAlert({
      type:type,
      msg:message
      
    })
    setTimeout(() => {
      setAlert("");
    }, 1800);


  }

  const toggleMode = () => {
    if (Mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#333333';
        document.body.style.color ='white';    
        handleAlert("success"," Dark Mode Was A Succes")
        
    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        document.body.style.color ='black';
        handleAlert("success"," Light Mode Was A Succes")
    }
};


 
  return (
   <>
  <Router>
<Main Navbarhead="TEXT MANIPULATOR"  mode={Mode} toggleMode={toggleMode}></Main>
 <Alert  alert={alert}  />

 <Routes>

      <Route exact path="/" element= {<Forms handleAlert={handleAlert}/>}/>
      
    
      <Route   path="/about" element={<About />}/>
        
    
      

      </Routes>


    </Router>

 
     
            
       

          

         
   
   </>

  );




}

export default App;

