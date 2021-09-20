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
    const [lastName, setLastName] = React.useState("")
    const [age, setAge] = React.useState("")
    const [zip, setZip] = React.useState("")
    const [delivFreq, setDelivFreq] = React.useState ("Iedere week")
    const [delivTime, setDelivTime] = React.useState ("Overdag")
    const [comment, setComment] = React.useState("")
    const [terms, setTerms] = React.useState(false)

    function handleClick(e) {
        e.preventDefault();
        console.log({firstName}, {lastName},{age},{zip},{delivFreq},
            {delivTime}, {comment},{terms}, {banaan}, {aardbei}, {appel}, {kiwi})
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
                </div>
                <div className="box2">
                    <form className="form">
                        <Info
                            id="Voornaam"
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <Info
                            id="Achternaam"
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <Info
                            id="Leeftijd"
                            type="text"
                            name="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                        <Info
                            id="Postcode"
                            type="text"
                            name="zip"
                            value={zip}
                            onChange={(e) => setZip(e.target.value)}
                        />
                        <label htmlFor="bezorgfreq">Bezorgfrequentie
                            <select name="bezorgfreq"
                                    id="bezorgfreq"
                                    value={delivFreq}
                                    onChange={(e)=>setDelivFreq(e.target.value)}
                            >
                                <option value="iedere week">Iedere week</option>
                                <option value="om de week">Om de week</option>
                                <option value="iedere maand">iedere maand</option>
                            </select>
                        </label>
                        <Info
                            id="Overdag"
                            type="radio"
                            name="delivTime"
                            value={delivTime}
                            onClick={(e)=> setDelivTime (e.target.value)}
                            checked={true}
                        />
                        <Info
                            id="'s Avonds"
                            type="radio"
                            name="delivTime"
                            value={delivTime}
                            onClick={(e)=> setDelivTime (e.target.value)}
                        />
                        <textarea
                            name="comment"
                            id="comment"
                            cols="30" rows="10"
                            value={comment}
                            onChange={(e)=>setComment(e.target.value)}
                        >
                        </textarea>
                        <Info
                        id="terms"
                        type = "checkbox"
                        name="terms"
                        value={terms}
                        onClick={(e)=>setTerms(!terms)}
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
