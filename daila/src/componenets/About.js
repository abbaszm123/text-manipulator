import React from 'react'






export default function About(props) {

    

    let myStyle = {
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white', 
    }
    




  return (
    <div className="container my-3" >
        <h3>About Us</h3>
        <div style={myStyle} className="alert alert-primary my-3" role="alert" >
            
<div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" style={myStyle}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Analyze Your text 
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"> Textutils gives you a way to analyze your <code>text quickly</code> and <code>efficiently</code>. Be it <code>word count</code>, <code>character count</code> or any other function we are here</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Free to use
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"> <code>TextUtils </code> is a free character counter tool that provides  <code>instant character count </code> &  <code>word count </code> statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with words </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      Browser Compatible
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">This word counter software works in any web browsers such as <code> Chrome, Firefox, Internet Explorer, Safari, Opera</code>. It suits to count characters in<code>facebook, blog, books, excel document, pdf document, essays, etc</code>.
  </div>
    </div>
  </div>
</div>


    </div>


</div>

    
  )
}
