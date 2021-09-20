import React from "react";
import Counter from "../Counter/Counter";

function Fruitbar({fruitName, fruitCount, setFruitCount}) {

    return (
        <div className="fruitbar"
        >
            <p>{fruitName}</p>
            <Counter
                fruitCount={fruitCount}
                setFruitCount={setFruitCount}
            />
        </div>
    )
}

export default Fruitbar;