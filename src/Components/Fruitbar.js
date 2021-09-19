import React, {useState} from "react";
import Counter from "./Counter";

function Fruitbar (props) {

    return (
        <div className="fruitBar">
            <p>{props.fruitName}</p>
            <Counter/>
        </div>
    )
}

export default Fruitbar;