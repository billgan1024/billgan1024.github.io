import React from "react";

export default function Card({ children, src, url }) {
    function openLink() {
        window.open(url);
    }
    return (
        <div className="fade-in card-container">
            <a target="_blank" rel="noreferrer" href={url} style={{ height: "calc(40vh*2/3)" }}>
                <img className="card-img" src={src}></img>
            </a>
            <div className="card-desc">
                {children}
            </div>
        </div>
    );
}
