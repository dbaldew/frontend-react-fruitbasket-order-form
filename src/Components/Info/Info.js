import React from "react";

function Info ({type, id, name,value,onChange,onClick, defaultChecked}) {

    return(
            <input
                className="input"
                type={type}
                id={id}
                name ={name}
                value={value}
                onChange={onChange}
                onClick={onClick}
                defaultChecked={defaultChecked}
            />
    )
}

export default Info;
