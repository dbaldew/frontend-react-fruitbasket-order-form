import React from 'react';
import './App.css';
import Fruitbar from "./Components/Fruitbar/Fruitbar";
import Info from "./Components/Info/Info";

function App() {
    const [banaan, setBanaan] = React.useState(0);
    const [aardbei, setAardbei] = React.useState(0);
    const [appel, setAppel] = React.useState(0);
    const [kiwi, setKiwi] = React.useState(0);
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [age, setAge] = React.useState("");
    const [zip, setZip] = React.useState("");
    const [delivFreq, setDelivFreq] = React.useState("Iedere week");
    const [delivTime, setDelivTime] = React.useState("Overdag");
    const [comment, setComment] = React.useState("");
    const [terms, setTerms] = React.useState(false);
    const total = appel.valueOf() + banaan.valueOf() + aardbei.valueOf() + kiwi.valueOf();

    function handleClick(e) {
        e.preventDefault();
        console.log({firstName}, {lastName}, {age}, {zip}, {delivFreq},
            {delivTime}, {comment}, {terms}, {banaan}, {aardbei}, {appel}, {kiwi}, total)

    }

    function reset() {
        setBanaan(0);
        setAardbei(0);
        setAppel(0);
        setKiwi(0);
    }

    return (
        <>
            <div className="flex-container">
                <div className="box1">
                    <Fruitbar
                        fruitName="🍓 Aardbeien"
                        fruitCount={aardbei}
                        setFruitCount={setAardbei}
                    />
                    <Fruitbar
                        fruitName="🍌 Bananen"
                        fruitCount={banaan}
                        setFruitCount={setBanaan}
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
                    <button className="stdBtn"
                            type="Reset"
                            onClick={reset}
                    >Reset
                    </button>
                </div>
                <div className="box2">
                    <form className="form">
                        <label htmlFor="Voornaam">Voornaam
                            <Info
                                id="Voornaam"
                                type="text"
                                name="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </label>
                        <label htmlFor="Achternaam">Achternaam
                            <Info
                                id="Achternaam"
                                type="text"
                                name="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </label>
                        <label htmlFor="Leeftijd">Leeftijd
                            <Info
                                id="Leeftijd"
                                type="text"
                                name="age"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </label>
                        <label htmlFor="Postcode">Postcode
                            <Info
                                id="Postcode"
                                type="text"
                                name="zip"
                                value={zip}
                                onChange={(e) => setZip(e.target.value)}
                            />
                        </label>
                        <label htmlFor="bezorgfreq">Bezorgfrequentie
                            <select name="bezorgfreq"
                                    id="bezorgfreq"
                                    value={delivFreq}
                                    onChange={(e) => setDelivFreq(e.target.value)}
                            >
                                <option value="iedere week">Iedere week</option>
                                <option value="om de week">Om de week</option>
                                <option value="iedere maand">iedere maand</option>
                            </select>
                        </label>
                        <div className="delivtimecontainer">
                            <label htmlFor="delivTime1">
                                <Info
                                    id="delivTime1"
                                    type="radio"
                                    defaultChecked={true}
                                    name="delivTime"
                                    value="Overdag"
                                    onClick={(e) => setDelivTime(e.target.value)}
                                />Overdag
                            </label>
                            <label htmlFor="delivTime2">
                                <Info
                                    id="delivTime2"
                                    type="radio"
                                    name="delivTime"
                                    value="'s Avonds"
                                    onClick={(e) => setDelivTime(e.target.value)}
                                />'s Avonds
                            </label>
                        </div>
                        <label htmlFor="comment">Opmerkingen</label>
                        <textarea
                            className="comment"
                            name="comment"
                            id="comment"
                            cols="30" rows="5"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        >
                        </textarea>
                        <label htmlFor="terms">
                            <Info
                                id="terms"
                                type="checkbox"
                                name="terms"
                                value={terms}
                                onClick={(e) => setTerms(!terms)}
                            />Ik ga akkoord met de voorwaarden
                        </label>
                    </form>
                    <div className="sendContainer">
                        {total.valueOf() > 0 && <p className="greet">Eet smakelijk!</p>}
                        {total.valueOf() < 1 && <p className="warn">Je hebt nog geen fruit gekozen!</p>}
                        <button className="stdBtn"
                                type="submit"
                                disabled={!terms}
                                onClick={handleClick}
                        >Verzenden
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
