import React from "react";
import { KeyContext } from "../App";

//renders a specific link that takes you to a page, and uses the current key obtained from the app 
//to determine whether the nav link should be highlighted or not
//show = whether link works or not
export default function Link({ keyName, canActivate, show }) {
    const key = React.useContext(KeyContext);
    const name = keyName.charAt(0).toUpperCase() + keyName.slice(1);

    return (
        <>
            <a href={"#" + keyName} className={(canActivate && key === keyName) ? "active" : ""} style={show ? null : { cursor: "default", pointerEvents: "none" }}>
                {keyName.charAt(0).toUpperCase() + keyName.slice(1)}</a>
        </>
    );
}
