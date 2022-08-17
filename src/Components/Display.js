import {useState} from "react";
import Result from "./result";

const Display= ()=>{
    const[inputValue,setInputValue]=useState("");
    const[result,setResult]=useState("");
    const handleChange=(e)=>{
        let val=parseInt(e.target.value);
        console.log(val);
        if(val)
        {
            setInputValue(e.target.value);

        }
        else if(e.target.value.length==0)
        {
            setInputValue("");
        }
        else {

            alert("Not a number");
        }

    }
    const handleClick=(e)=>{
        if(e.target.value==="Calculate") {
            setResult(eval(inputValue));
        }
        else
        {
            setResult("");
            setInputValue("");
        }

    }
    return(
        <>
            <div className="Display-cont">
                <input type="text" name="cont" value={inputValue} placeholder="Enter your calculations" onChange={handleChange} />
            </div>
            <Result result={result} />
            <div className="butt">
                <input type="button" value="Calculate"  onClick={handleClick}/>
                <input type="button" value="Clear" id="clear" onClick={handleClick}/>
            </div>
        </>
    );
}

export default Display;