import React from 'react'
import { useState } from 'react'





export default function Forms(props) {

    const [Text, setText] = useState("");



    function handleUpclick(){
        console.log("clicked")
        let newText= Text.toUpperCase();
        setText(newText)
        props.handleAlert("success, " ,"Text Converted To Upper Case!" );

        

    }

    function handleLoclick(){
        console.log("clicked")
        let newText= Text.toLowerCase();
        setText(newText)
        

    }
    function handleClearClick(){
      console.log("clicked")
      
      setText("")
      

  }

  function handleCapClick(){
    
    setText(Text.charAt(0).toUpperCase() + Text.slice(1))
    
  }

  function handleRemClick(){
    
  setText(Text.replace(/\s+/g, ' ').trim()) 
  }
    
  



    const handleOnchange = (event) =>{
        setText(event.target.value)
       
    }


    const handleCopy = () => {
      console.log("I am copy");
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
  
    }

  return (
    <div >
        
        <div className="container"  ><h3 className='my-4' >PLEASE ENTER YOUR TEXT HERE</h3>
        
        <div className="text-center" >
    <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
    <textarea value={Text}   onChange={handleOnchange}  className="form-control" id="myBox" rows="3"></textarea>
  </div>
  </div>
  <div className="container"  >

  <button className="btn btn-primary my-3 mx-2" onClick={handleLoclick} disabled={Text.length===0}  >Convert To Lowercase</button>
  <button className="btn btn-primary my-3 mx-2" onClick={handleUpclick} disabled={Text.length===0} >Convert To Uppercase</button>
  <button className="btn btn-primary my-3 mx-2" onClick={handleClearClick} disabled={Text.length===0} >Clear Text</button>
  <button className="btn btn-primary my-3 mx-2" onClick={handleCapClick} disabled={Text.length===0} >Capitilize First Letter</button>
  <button className="btn btn-primary my-3 mx-2" onClick={handleRemClick} disabled={Text.length===0} >Remove Extra Spaces</button>
  <button className="btn btn-primary my-3 mx-2" onClick={handleCopy} disabled={Text.length===0} >Copy Text</button>
  </div>

  <h4 className='text-center' >Charachters Count</h4>
  <h6 className='mx-4 text-center'>
    {Text.length}
  </h6>
  <h4 className='text-center' >
    Words Count
  </h4>
<h6 className='text-center'>
  {Text.split(" ").filter((element)=>{return element.length!==0}).length}
</h6>

<h4 className='text-center' >Minutes Read</h4>
<h6 className='text-center mb-3' >{0.008*Text.split(" ").length}</h6>



</div>




  
  )
}
