import React from "react";

//renders a circular bubble which will animate at the correct time
export default function Bubble({src, children}) {
    return (
        <div className="fade-in-below bubble-container" >
            <img className="bubble-img" src={src}/>
            {children}
        </div> 
    );
}
