import React from 'react';
import './App.css';

function App() {
    return (
        <>
            <div className="flex-container">
                <div className= "box1">
                    <div className="fruitBar">
                        <p>🍓 Aardbeien</p>
                        <label htmlFor="subtr"><button type="button" name="subtr">-</button></label>

                        <p>0</p>

                        <label htmlFor="add"><button type="button" name="add">+</button></label>


                    </div>

                    <div className="fruitBarReset">
                        <p>Reset</p>

                    </div>
                </div>

                <div className="box2">

                    <form className="form">

                        <label className="formLabel" htmlFor="firstName">
                            Voornaam<input className="formInput" type="text" name="firstName"/>
                        </label>
                        <label className="formLabel" htmlFor="lastName">
                            Achternaam<input className="formInput" type="text" name="lastName"/>
                        </label>
                        <label className="formLabel" htmlFor="age">
                            Leeftijd<input className="formInput" type="text" name="age"/>
                        </label>
                        <label className="formLabel" htmlFor="zip">
                            Postcode<input className="formInput" type="text" name="zip"/>
                        </label>

                        <label className="formDropDownLabel" htmlFor="delivFreq">Bezorgfrequentie
                            <select
                                className="fromDropDown" name="delivFreq" id="delivFreq">
                                <option value="iedere week">Iedere week</option>
                                <option value="om de week">Om de week</option>
                                <option value="iedere week">Iedere maand</option>
                            </select>
                        </label>

                        <div className="containerDelivBtn">
                            <label className="delivTimeRadioLabel"htmlFor="delivTimeRadio">
                                <input className="delivTimeRadio" type="radio" name="delivTimeRadio"/>Overdag
                            </label>
                            <label className="delivTimeRadioLabel"htmlFor="delivTimeRadio">
                                <input className="delivTimeRadio" type="radio" name="delivTimeRadio"/>'s Avonds
                            </label>
                        </div>

                        <label className="commentLabel" htmlFor="comment">Opmerking</label>
                        <textarea className="comment" name="comment" id="comment" cols="20" rows="7" fixed = "true"></textarea>

                        <label className="agreeLabel" htmlFor="agreeChk">
                            <input className="agreeCheckbox" type="checkbox" name="agreeChk"/>Ik ga akkoord met de voorwaarden
                        </label>

                        <label htmlFor="submitBtn">
                            <button className="submitBtn" type="submit" name="submitBtn">Verzend</button>
                        </label>

                    </form>

                </div>
            </div>


        </>

    );
}

export default App;
