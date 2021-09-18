import React from 'react';
import './App.css';
import Fruitbar from "./Components/Fruitbar";
import Form from "./Components/Form";

function App() {
    return (
        <>
            <div className="flex-container">
                <div className="box1">
                    <Fruitbar
                        fruitName="🍓 Aardbeien"
                    />
                    <Fruitbar
                        fruitName="🍌 Bananen"
                    />
                    <Fruitbar
                        fruitName="🍏 Appels"
                    />
                    <Fruitbar
                        fruitName="🥝 Kiwi's"
                    />
                    <label htmlFor="stdBtn">
                        <button className= "reset"
                                type="reset"
                                name="submitBtn">Reset
                        </button>
                    </label>


                </div>
                <div className="box2">
                    <Form/>
                </div>
            </div>
        </>
    );
}

export default App;
