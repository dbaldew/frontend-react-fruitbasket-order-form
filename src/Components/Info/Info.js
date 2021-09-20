import React from "react";

function Info ({type, id, name,onChange}) {




    return(
        <label htmlFor="input">Voornaam
            <input
                type={type}
                id={id}
                name ={name}
                onChange={onChange}

            />
        </label>
    )
}

export default Info;
