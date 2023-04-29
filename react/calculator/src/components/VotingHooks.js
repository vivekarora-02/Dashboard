import React, {useState, useEffect} from "react";


function VotingHooks(){
    const [count, setCount] = useState(0);
    const [result, setResult] = useState(0);
    
    useEffect(()=>{
        setTimeout(()=>{
            if()
        })
    })
    return(
        <div>
            <button onClick={increment}>Yes</button>
            <button onClick={increment}>No</button>
        </div>
    )
}