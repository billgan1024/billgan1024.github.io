import React, { useEffect } from "react";

export default function Card({ children, title, src, url }) {
    //since there are 4 cards on screen, whenever each one is mounted, the code will run
    //think of it as the object's create event
    useEffect(() => {
        console.log("hi");
    }, []);
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
