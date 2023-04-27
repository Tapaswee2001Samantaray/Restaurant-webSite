import React, { useReducer, useState } from "react";
import "./style.css";

const reducer = (state, action) => {
    if (action.type === "INCR") {
        state = state + 1;
    }
    if (state > 0 && action.type === "DECR") {
        state = state - 1;
    }
    return state;
}

const UseReducer = () => {
    // const [myNum, setMyNum] = useState(0);

    //it also return 2 element of array i.e current "state" and dispatch method
    const initialData = 10;
    const [state, dispatch] = useReducer(reducer, initialData); //it takes takes two arguments i.e reducer method and initial data
                                                                //the initial data is known as the state's current value
                                                                // dispatch is used to trigger your reducer function
                                                                //and inside the reducer method we have the updated function by using this we can update our state
    return (
        <>
            <div className="center_div">
                <p>{state}</p>
                <div class="button2" onClick={() => dispatch({ type: "INCR" })}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCREMENT
                </div>
                <div class="button2" onClick={() => dispatch({ type: "DECR" })}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECREMENT
                </div>
            </div>
        </>
    );
}

export default UseReducer;