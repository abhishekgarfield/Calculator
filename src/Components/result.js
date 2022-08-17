const Result =({result})=>{
    return(
        <>
            <div className="result-cont">
                <input type="text" disabled={true} value={result} readOnly placeholder="Result display"/>
            </div>
        </>
    );
}

export default Result;