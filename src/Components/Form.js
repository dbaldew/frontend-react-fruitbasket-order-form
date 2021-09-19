import React from "react";
import Userinfo from "./Userinfo";

function Form() {
    return (
        <form className="form">
            {/*userinfo*/}
            <Userinfo
                name = "Voornaam"
            />
            <Userinfo
                name = "Achternaam"
            />
            <Userinfo
                name = "Leeftijd"
            />
            <Userinfo
                name = "Postcode"
            />


            {/*freq*/}
            <label className="formDropDownLabel"
                   htmlFor="delivFreq">Bezorgfrequentie
                <select
                    className="fromDropDown"
                    name="delivFreq"
                    id="delivFreq">
                    <option value="iedere week">Iedere week</option>
                    <option value="om de week">Om de week</option>
                    <option value="iedere week">Iedere maand</option>
                </select>
            </label>

            {/*time*/}
            <div className="containerDelivBtn">
                <label className="delivTimeRadioLabel"
                       htmlFor="delivTimeRadio">
                    <input
                        className="delivTimeRadio"
                        type="radio"
                        name="delivTimeRadio"/>Overdag
                </label>
                <label className="delivTimeRadioLabel"
                       htmlFor="delivTimeRadio">
                    <input
                        className="delivTimeRadio"
                        type="radio"
                        name="delivTimeRadio"/>'s Avonds
                </label>
            </div>

            {/*commentbox*/}
            <label className="commentLabel"
                   htmlFor="comment">Opmerking
            </label>
            <textarea
                className="comment"
                name="comment"
                id="comment"
                cols="20" rows="6"
                fixed="true">
            </textarea>

            {/*terms*/}
            <label className="agreeLabel"
                   htmlFor="agreeChk">
                <input className="agreeCheckbox"
                       type="checkbox"
                       name="agreeChk"
                />Ik ga akkoord met de voorwaarden
            </label>

            {/*submit*/}
            <label htmlFor="stdBtn">
                <button className="stdBtn"
                        type="submit"
                        name="submitBtn">Verzend
                </button>
            </label>
        </form>
    )
}

export default Form;