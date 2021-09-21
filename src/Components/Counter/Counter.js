import React from "react";

function Counter({fruitCount, setFruitCount}) {

    function add() {
        setFruitCount(fruitCount + 1);
    }

    function sub() {
        fruitCount > 0 ? setFruitCount(fruitCount - 1) : (setFruitCount(0));
    }


    return (
        <div className="counterContainer">
            <label htmlFor="subtr">
                <button
                    className="counterBtn"
                    type="button"
                    name="subtr"
                    id="subtr"
                    onClick={sub}
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
                    readOnly={true}
                    value={fruitCount}
                />
            </label>
            <label htmlFor="add">
                <button
                    className="counterBtn"
                    type="button"
                    name="add"
                    id="add"
                    onClick={add}
                >+
                </button>
            </label>
        </div>
    )
}

export default Counter;