import React from "react";

function Info ({type, id, name,onChange,onClick}) {

    return(
            <input
                type={type}
                id={id}
                name ={name}
                onChange={onChange}
                onClick={onClick}
            />
    )
}

export default Info;
