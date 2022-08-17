const Mac= ({setShowCalcKeypad}) => {

    return(
        <>
        <div className="mac-cont">
            <div className="option-cont">
                <div className="option-type" onClick={()=>setShowCalcKeypad(false)}>
                    <p>Device keypad</p>
                    <div className="info">
                        <i className="cont"></i>
                        <p>you can  use ur own device keyboard</p>
                    </div>
                </div>
                <div className="option-keypad" onClick={()=>setShowCalcKeypad(true)}>
                    <p>Calc keypad</p>
                    <div className="info">
                        <i className="cont"></i>
                        <p>you can  use ur CALC keyboard</p>
                    </div>
                </div>
            </div>
        </div> </>
    );
}

export default Mac;