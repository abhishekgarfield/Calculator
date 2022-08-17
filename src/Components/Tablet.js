import Display from "./Display";
import Keyboard from "./Keyboard";
const Tablet= ({showCalcKeypad}) => {
    return(
        <>
            <div className="tab-cont">
                <div className="tab-lower-button">
                </div>
                <div className="display">
                    <div className="display-key">
                        {!showCalcKeypad && <Display />}
                    </div>
                    {showCalcKeypad && <Keyboard/>}
                </div>
            </div> </>
    );
}

export default Tablet;