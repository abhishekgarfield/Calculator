import {useState} from "react";

const Keyboard=()=>{
    const[val,setValue]=useState("");
    const handleClick=(e)=> {
        if(e.target.value==="calculate")
        {
            setValue(eval(val));
        }
        else if(e.target.value==="clear")
        {
            setValue("");
        }
        else {
            const str = val.concat(e.target.value);
            setValue(str);
        }
    }
    return(
        <>
            <div className="keyboard-cont">
                <div className="keyboard-cont-display">
                    <input type="text" value={val}  readOnly={true}/>
                </div>
                <div className="keyboard">
                    <input type="button" value="1" className="keyboard-buttons" onClick={handleClick}/>
                    <input type="button" value="2" className="keyboard-buttons" onClick={handleClick}/>
                    <input type="button" value="3" className="keyboard-buttons" onClick={handleClick}/>
                    <input type="button" value="+" className="keyboard-buttons" onClick={handleClick}/>
                    <input type="button" value="4" className="keyboard-buttons" onClick={handleClick}/>
                    <input type="button" value="5" className="keyboard-buttons" onClick={handleClick}/>
                    <input type="button" value="6" className="keyboard-buttons" onClick={handleClick}/>
                    <input type="button" value="-" className="keyboard-buttons" onClick={handleClick}/>
                    <input type="button" value="7" className="keyboard-buttons" onClick={handleClick}/>
                    <input type="button" value="8" className="keyboard-buttons" onClick={handleClick}/>
                    <input type="button" value="9" className="keyboard-buttons" onClick={handleClick}/>
                    <input type="button" value="*" className="keyboard-buttons" onClick={handleClick}/>
                    <input id="zero" type="button" value="0" className="keyboard-buttons" onClick={handleClick}/>


                    <input  type="button" value="/" className="keyboard-buttons" onClick={handleClick}/>

                    <input id="cler" type="button" value="clear" className="keyboard-buttons" onClick={handleClick}/>
                    <input id ="calc" type="button" value="calculate" className="keyboard-buttons" onClick={handleClick}/>
                </div>
            </div>
        </>
    );
}

export default Keyboard;