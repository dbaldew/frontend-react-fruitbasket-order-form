import React from "react";

function Userinfo (props) {
    return (
        <label
            className="formLabel"
            htmlFor="userInfo">{props.name}
            <input
                className="formInput"
                type="text"
                name="userInfo"
            />
        </label>
    )
}
export default Userinfo