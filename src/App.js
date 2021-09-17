import React from 'react';
import './App.css';

function App() {
    return (
        <>
            <div className="box">

                <form className="form">

                    <label className="formLabel" htmlFor="voornaam">
                        Voornaam<input className="formInput" type="text" name="voornaam"/>
                    </label>

                    <label className="formDropDownLabel" htmlFor="delivFreq">Bezorgfrequentie
                        <select
                            className="fromDropDown" name="delivFreq" id="delivFreq">
                            <option value="iedere week">Iedere week</option>
                            <option value="om de week">Om de week</option>
                            <option value="iedere week">Iedere maand</option>
                        </select>
                    </label>

                    <label className="delivTimeRadioLabel"htmlFor="delivTimeRadio">
                        <input className="delivTimeRadio" type="radio" name="delivTimeRadio"/>Overdag
                    </label>

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

        </>

    );
}

export default App;
