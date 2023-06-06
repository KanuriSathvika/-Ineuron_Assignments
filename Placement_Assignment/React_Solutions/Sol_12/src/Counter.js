import React from "react";
import { useState } from "react";
import "./style.css";

const Counter=()=>{
    const [count, setCount]=useState(0);

    return(
       <div className="part">
         <h1>Counter App</h1>
         <p>{count}</p>
         <div className="counting">
            <button className="count" id="minus" onClick={()=>count>0?setCount(count-1):""}>-</button>

            <button className="count" id="plus"  onClick={()=>count<20?setCount(count+1):""}>+</button>
         </div>
         <button className="reset"  onClick={()=> setCount(0)}>Reset</button>

       </div>
    )
};

export default Counter;