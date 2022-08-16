import Mac from "../Components/Mac"
import Tablet from "../Components/Tablet"
import ("../index.css");

const Home=()=>{
    return(
        <>
            <div className="calc-cont">
                <Mac />
                <Tablet />
            </div>
        </>
    )
}
export default Home;