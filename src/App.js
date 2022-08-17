import {BrowserRouter ,Route,Routes  } from "react-router-dom";
import Home from "./pages/Home"

const App=()=>{
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </BrowserRouter>

    )
}
export default App;
