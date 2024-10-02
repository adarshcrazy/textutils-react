import React, {useState} from 'react'


export default function Form(props) {
  const [text, setText] = useState("");

  const handleClick = ()=>{
    setText(text.toUpperCase())
    props.alert('Converted to Upper Case', 'success');

  }

  const handleCopyClick = ()=>{
    // Copy the text inside the text field
    let copyText = document.getElementById('myBox');
    copyText.select();
    navigator.clipboard.writeText(text);
  
  }
  
  const handleLoClick = ()=>{
    setText(text.toLowerCase())
    props.alert('Converted to Lower Case', 'success');

  }

  const handleChange = (event)=>{
    setText(event.target.value);
  }

  const handleSpaceClick = ()=>{
    let newStr = text.replace(/\s+/g, ' ');
    setText(newStr);
 }

  return (
    <div style={{color: props.mode==='light'?'#000':'#fff'}}>
        <h2>{props.heading}</h2>
        <div className="my-3">
            <textarea style={{color: props.mode==='light'?'#000':'#fff', backgroundColor: props.mode==='light'?'#fff':'#0d1c31'}} className="form-control"  id="myBox" value={text} onChange={handleChange} cols="12" rows="8"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleClick}>Conver to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>Conver to Lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handleCopyClick}>Copy Text</button>
        <button className='btn btn-primary' onClick={handleSpaceClick}>Remove Space</button>
        <div className="my-3">
            <h3>Your text summary</h3>
            { text.split(" ").filter((element)=>{return element.length!=0}).length } Words and {text.length} Character 
            <h3 className="mt-4">Preview:</h3> 
            <p>{text===''?"Enter something above to preview the text":text}</p>
        </div>
    </div>
  )
}
