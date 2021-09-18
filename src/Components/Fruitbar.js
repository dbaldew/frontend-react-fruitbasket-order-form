import React from "react";

function Fruitbar (props) {

    return (
        <div className="fruitBar">
            <p>{props.fruitName}</p>
            <div className="counterContainer">
                <label htmlFor="subtr">
                    <button
                        className="counterBtn"
                        type="button"
                        name="subtr"
                        id="subtr"
                    >-
                    </button>
                </label>
                <label htmlFor="fruitCountNr">
                    <input
                        className="fruitCountNr"
                        type="text"
                        id="fruitCountNr"
                        name="fruitCountNr"
                        value="0"
                    />
                </label>
                <label htmlFor="add">
                    <button
                        className="counterBtn"
                        type="button"
                        name="add"
                        id="add"
                    >+
                    </button>
                </label>
            </div>
        </div>
    )
}

export default Fruitbar