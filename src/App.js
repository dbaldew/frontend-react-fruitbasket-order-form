import React from 'react';
import './App.css';
import Fruitbar from "./Components/Fruitbar/Fruitbar";
import Info from "./Components/Info/Info";


function App() {
    const [banaan, setBanaan] = React.useState(0);
    const [aardbei, setAardbei] = React.useState(0);
    const [appel, setAppel] = React.useState(0);
    const [kiwi, setKiwi] = React.useState(0);
    const [firstName, setFirstName] = React.useState("")


    function handleClick(e) {
        e.preventDefault();
        console.log({firstName}, {banaan}, {aardbei}, {appel}, {kiwi})
    }


    return (
        <>
            <div className="flex-container">
                <div className="box1">
                    <Fruitbar
                        fruitName="🍌 Bananen"
                        fruitCount={banaan}
                        setFruitCount={setBanaan}
                    />
                    <Fruitbar
                        fruitName="🍓 Aardbeien"
                        fruitCount={aardbei}
                        setFruitCount={setAardbei}
                    />
                    <Fruitbar
                        fruitName="🍏 Appels"
                        fruitCount={appel}
                        setFruitCount={setAppel}
                    />
                    <Fruitbar
                        fruitName="🥝 Kiwi's"
                        fruitCount={kiwi}
                        setFruitCount={setKiwi}
                    />
                </div>
                <div className="box2">
                    <form className="form">
                        <Info
                            type= "text"
                            name = "Voornaam"
                            value = {firstName}
                            onChange={(e)=> setFirstName(e.target.value)}
                        />

                    </form>

                    <button className="stdBtn"
                            type="submit"
                            onClick={handleClick}
                    >Verzenden
                    </button>
                </div>
            </div>
        </>
    );
}

export default App;
