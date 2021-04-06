import React, {useRef} from "react";
import firebase from "../firebase";

export default function Form() {
    //refs track the values of the dom nodes
    const name = useRef();
    const email = useRef();
    const msg = useRef();
    function handleSubmit(e) {
        e.preventDefault();
            firebase.firestore().collection("messages").add({
                name: name.current.value,
                email: email.current.value,
                msg: msg.current.value,
                date: new Date().toString()
            }).then(() => {
                alert("Message sent successfully.");
                msg.current.value = ""; 
            }).catch(e => {
                alert("Error sending message.");
            });
    }
    return (    
        <form onSubmit={handleSubmit} className="fade-in-below" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <label className="form-label"><small>Name:</small></label>
        <input className="form-text" type="text" ref={name} required/>
        <label className="form-label"><small>Email:</small></label>
        <input className="form-text" type="email" ref={email} required/>
        <label className="form-label"><small>Message:</small></label>
        <textarea className="form-text form-text-area" ref={msg} required/>
        <input className="form-btn" type="submit" value="Submit"/>
        </form>
    );
}
