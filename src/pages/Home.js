import Mac from "../Components/Mac"
import Tablet from "../Components/Tablet"
import {useState} from "react";
import ("../index.css");

const Home=()=>{
    const[showCalcKeypad,setShowCalcKeypad]=useState(true);
    return(
        <>
            <div className="calc-cont">
                <Mac setShowCalcKeypad={setShowCalcKeypad}/>
                <Tablet showCalcKeypad={showCalcKeypad}/>
            </div>
        </>
    )
}
export default Home;