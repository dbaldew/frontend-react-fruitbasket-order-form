import React from 'react';
import './App.css';
import Fruitbar from "./Components/Fruitbar";
import Info from "./Components/Info";
import Reset from "./Components/Reset";


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
                    <Reset/>

                </div>
                <div className="box2">
                    <Info/>
                </div>
            </div>
        </>
    );
}

export default App;
