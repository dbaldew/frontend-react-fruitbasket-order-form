import React from "react";


function Info() {
    const [firstName, setFirstName] = React.useState("")
    const [delivFreq, setDelivFreq] = React.useState("iedere week")
    const [delivTime, setDelivTime] = React.useState("Overdag")
    const [comment, setComment] = React.useState ("")
    const [terms, setTerms] = React.useState (false)

    return (
        <form className="form">
            {/*userinfo*/}
            <label
                className="formLabel"
                htmlFor="userInfo">Voornaam
                <input
                    className="userInfo"
                    type="text"
                    name="userInfo"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </label>

            {/*freq*/}
            <label className="formDropDownLabel"
                   htmlFor="delivFreq">Bezorgfrequentie
                <select
                    className="fromDropDown"
                    name="delivFreq"
                    id="delivFreq"
                    value={delivFreq}
                    onChange={(e) => setDelivFreq(e.target.value)}
                >
                    <option value="iedere week">Iedere week</option>
                    <option value="om de week">Om de week</option>
                    <option value="iedere week">Iedere maand</option>
                </select>
            </label>

            {/*time*/}
            <div className="containerDelivBtn">
                <label className="delivTimeLabel"
                       htmlFor="delivTime1">
                    <input
                        className="delivTime"
                        type="radio"
                        id = "delivTime1"
                        name="delivTime"
                        value={delivTime}
                        onChange={(e) => setDelivTime(e.target.value)}
                    />Overdag
                </label>
                <label className="delivTimeLabel"
                       htmlFor="delivTime2">
                    <input
                        className="delivTime"
                        type="radio"
                        id = "delivTime2"
                        name="delivTime"
                        value = {delivTime}
                        onChange={(e) => setDelivTime(e.target.value)}
                    />'s Avonds
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
                fixed="true"
                value = {comment}
                onChange={(e)=>setComment(e.target.value)}
            >
            </textarea>

            {/*terms*/}
            <label className="agreeLabel"
                   htmlFor="agreeChk">
                <input className="agreeCheckbox"
                       type="checkbox"
                       name="agreeChk"
                       value ={terms}
                       onChange={(e)=>setTerms(!terms)}
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

export default Info;