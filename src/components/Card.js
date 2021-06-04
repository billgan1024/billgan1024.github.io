import React from "react";

export default function Card({ children, title, src, url }) {
    return (
        <div>
            <h3 className="fade-in" style={{ marginBottom: "-1vh" }}>{title}</h3>
            <div className="fade-in card-container">
                <a target="_blank" rel="noreferrer" href={url} style={{ height: "calc(40vh*2/3)" }}>
                    <img className="card-img" src={src}></img>
                </a>
                <div className="card-desc">
                    {children}
                </div>
            </div>
        </div>
    );
}
