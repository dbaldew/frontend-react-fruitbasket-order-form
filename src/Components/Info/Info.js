import React from "react";

function Info ({type, id, name,value,onChange,onClick, checked}) {

    return(
            <input
                className="input"
                type={type}
                id={id}
                name ={name}
                value={value}
                onChange={onChange}
                onClick={onClick}
                checked={checked}
            />
    )
}

export default Info;
