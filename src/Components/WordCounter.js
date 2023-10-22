import React, {useState} from 'react'
import "./style.css"

export default function WordCounter() {
  const [Text,setText] = useState("Hii All");
  const handleOnChange = (event) =>{
    setText(event.target.value);
  }
  function Length(){
    let length ;
    if (Text === ""){
      length = 0;
    }else{
      length = Text.split(" ").length;
    }
    return length;
  }
  return (
    <div className='box'>
        <h1 >Responsive Paragraph Word Counter</h1>
        <textarea rows={10}cols={48} value={Text} onChange={handleOnChange}></textarea>
        <p style={{textAlign:"left"}}>Word Count : <Length /></p>
    </div>
  )
}