import React from "react";

export default function Card({children, src, url}) {
    function openLink() {
        window.open(url);
    }
    return (
        <div className="fade-in card-container">
            <img onClick={openLink} style={{cursor: "pointer"}} className="card-img" src={src}/>
            <div className="card-desc">
                {children}
            </div>
        </div>
    );
}
