import React from "react";

function Counter () {

    const [fruitCount, setFruitCount] = React.useState (0);

    return (
        <div className="counterContainer">
            <label htmlFor="subtr">
                <button
                    className="counterBtn"
                    type="button"
                    name="subtr"
                    id="subtr"
                    onClick={(e) =>fruitCount>0?setFruitCount(fruitCount -1):(setFruitCount(0))}
                >-
                </button>
            </label>
            <label
                htmlFor="fruitCount">
                <input
                    className="fruitCount"
                    type="text"
                    id="fruitCount"
                    name="fruitCount"
                    value={fruitCount}
                />
            </label>
            <label htmlFor="add">
                <button
                    className="counterBtn"
                    type="button"
                    name="add"
                    id="add"
                    onClick={(e) =>setFruitCount(fruitCount +1)}
                >+
                </button>
            </label>
        </div>
    )
}

export default Counter;