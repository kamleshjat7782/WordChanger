import React, { useState } from 'react'
import Alert from './Alert';
import './Home.css'
function Home(props) {

    const [text, setText] = useState ("");

    const handleUPClick = () =>{
      let newText = text.toUpperCase();
      setText(newText)
      showAlert("convert to uppercase", "success");
    }
    const handleLowClick = () =>{
      let newText = text.toLowerCase();
      setText(newText)
      showAlert("convert to lowercase", "success");
    }
    const handleRcsetClick = () =>{
      let newText = "";
      setText(newText)
      showAlert("Reset", "success");
    }
    
    const handlecapClick = () => {
      let newtext = text.split(" ");
      let nextText = newtext.map((text)=>{
        return text.charAt(0).toUpperCase()+ text.slice(1).toLocaleLowerCase();
      })
      
      setText(nextText.join(" "));
      showAlert("Capitalize");
    };

    const handleCopyClick = () =>{
      navigator.clipboard.writeText(text);
      showAlert("Text Copy", "Success");
    }


    const handleExtraSpace = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    }

    const handleOnChange = (event) =>{
      setText(event.target.value)

    }

    const [alert, setAlert] = useState(null);

    const showAlert =(message, type) =>{
      setAlert({
        msg: message,
        type: type,
      })

      setTimeout( ()=>{
        setAlert(null)
      },1500);

    }


  return (
    <>
    <Alert alert={alert}/>
    <div className='home'>
      <h1>Enter the text to analyze below</h1>
      <div className='text-area'>
      <textarea className='text' value={text} onChange={handleOnChange} id="box" cols="30" rows="10" placeholder='Type or paste your text here to change text case'> </textarea>
      </div>
      <div className="button">

          <button onClick={handleUPClick} >Uppercase</button>
          <button onClick={handleLowClick} >Lowercase</button>
          <button onClick={handlecapClick} >capitalize</button>
          <button onClick={handleRcsetClick} >Reset</button>
          <button onClick={handleCopyClick} >Copy text</button>
          <button onClick={handleExtraSpace} >Remove Extra space</button>
      </div>
      <div className="summary">
        <h1>Your text summary </h1>
      <p> {text.length} Characters And {text.split(" ").length} Words</p>
      <h3>Preview</h3>
      <p> {text} </p>
      </div>
    </div>
    </>
  )
}

export default Home


