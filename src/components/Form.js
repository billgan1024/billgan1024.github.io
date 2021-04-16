import React, { useState, useRef } from "react";
import firebase from "../firebase";


export default function Form() {
    //refs track the values of the dom nodes
    const name = useRef();
    const email = useRef();
    const msg = useRef();
    const [loading, setLoading] = useState(false);

    function addData() {
        firebase.firestore().collection("messages").add({
            name: name.current.value,
            email: email.current.value,
            msg: msg.current.value,
            date: new Date().toString()
        }).then(() => {
            alert("Message sent successfully.");
            msg.current.value = ""; setLoading(false);
        }).catch(e => {
            alert("Error: Could not send message."); setLoading(false);
        });
        //note: finally does NOT run after then/catch runs. it runs instantly
    }
    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        firebase.auth().createUserWithEmailAndPassword(email.current.value, "password").then(userCredential => {
            addData();
        }).catch(e => {
            if (e.code === "auth/invalid-email") { alert("Error: Invalid email."); setLoading(false); }
            else addData();
        });
    }
    return (
        <form onSubmit={e => handleSubmit(e)} className="fade-in-below" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <label className="form-label">Name:</label>
            <input className="form-text" type="text" ref={name} required />
            <label className="form-label">Email:</label>
            <input className="form-text" type="email" ref={email} required />
            <label className="form-label">Message:</label>
            <textarea className="form-text form-text-area" ref={msg} required />
            <input disabled={loading} className="form-btn" type="submit" value="Submit" />
        </form>
    );
}