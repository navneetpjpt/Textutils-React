import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to Uppercase!","success");
    }
    const handleLoClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to Lowercase!","success");
    }
    const handleClearClick = () => {
        let newtext = '';
        setText(newtext)
        props.showAlert("Text has been Cleared!","success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Coped to Clipboard!","success");
    }
    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces!","success");
    }
    const [text, setText] = useState('');
    // text = "new text"; Wrong way to change the state
    // setText = ("new text"); // Correct way to change the state
    return (
        <>
        <div className="container"style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:  props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upercase</button>
            <button className="btn btn-success mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-warning mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-info mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
        </div>
        <div className="container my-2"style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{ 0.008 * text.split(" ").length} Minutes Read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something to preview it here" }</p>
        </div>
        </>
    )
}
