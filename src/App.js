import React, { useState, useEffect, useRef } from "react";
import Link from "./components/Link";
import logo from "./assets/logo.png";
import vid from "./assets/vid.mp4";
import Bubble from "./components/Bubble";
import Card from "./components/Card";
import achievements from "./data/achievements";
import about from "./data/about";
import projects from "./data/projects";
import { isDesktop } from "react-device-detect";
import pic from "./assets/pic.png";
import contactSvg from "./data/contact";
import Form from "./components/Form";

//create a context to share the current active key with all the navbar links
export const KeyContext = React.createContext();
const matches = [".fade-in-below", ".fade-in", ".subtitle-left", ".subtitle-right", ".contact-icon"];

export default function App() {
    //uses states for intersect animations
    const [key, setKey] = useState("");
    const [load, setLoad] = useState(false);
    const [menu, setMenu] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    //refs provide an easy way to access the dom element from react code
    const fsMenuRef = useRef(null);

    useEffect(() => {
        initObserver();
        fsMenuRef.current.classList.add("bottom");
    }, []);

    //for some reason you need to add a new event listener every time menu changes to track changes of menu
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        window.addEventListener("keydown", handlePress);
        window.addEventListener("mousedown", handleClick);
    }, [menu, setMenu]);


    function handleResize(event) {
        //update menus
        setWidth(window.innerWidth);
        if (window.innerWidth > 600 && menu) {
            setMenu(false);
            setTimeout(() => {
                fsMenuRef.current.classList.add("bottom");
            }, 100);
        }
    }

    function handlePress(e) {
        if (e.which == 9) {
            document.querySelector(".form-btn").classList.add("tabbed-in");
        }
    }

    function handleClick(e) {
        //all the mouse buttons can focus on things, so listen for any mouse button
        document.querySelector(".form-btn").classList.remove("tabbed-in");
    }

    function updateLoaded() {
        setLoad(true);
        matches.forEach(str => {
            document.querySelectorAll(str).forEach(entry => {
                entry.classList.add("loaded");
            });
        });
    }

    function toggleMenu() {
        setMenu(prev => !prev);
        if (!menu) fsMenuRef.current.classList.remove("bottom");
        else setTimeout(() => {
            fsMenuRef.current.classList.add("bottom");
        }, 100);
    }
    return (
        <>
            {
                isDesktop ? (
                    <video className="background-vid" loop muted autoPlay onPlay={updateLoaded}>
                        <source src={vid} type="video/mp4" />
                    </video>
                ) : (
                    <img onLoad={updateLoaded} className="background-vid" src={pic} />
                )
            }
            <header>
                <img className="logo" src={logo} alt="logo" onClick={() => window.scrollTo(0, 0)} />
                <nav className="nav-links">
                    <KeyContext.Provider value={key}>
                        {
                            width > 600 ?
                                (
                                    <>
                                        <Link keyName="about" canActivate={true} show={true} />
                                        <Link keyName="projects" canActivate={true} show={true} />
                                        <Link keyName="achievements" canActivate={true} show={true} />
                                        <Link keyName="contact" canActivate={true} show={true} />
                                    </>
                                ) : null
                        }
                    </KeyContext.Provider>
                    {
                        width <= 600 ? (
                            <svg onClick={toggleMenu} className="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox={menu ? "0 0 352 512" : "0 0 448 512"}>
                                {
                                    menu ? (
                                        <path d="m 229.376,256 80.056,-80.056 c 9.824,-9.824 9.824,-25.752 0,-35.584 L 291.64,122.568 c -9.824,-9.824 -25.752,-9.824 -35.584,0 L 176,202.624 95.944,122.568 c -9.824,-9.824 -25.752,-9.824 -35.584,0 L 42.568,140.36 c -9.824,9.824 -9.824,25.752 0,35.584 L 122.624,256 42.568,336.056 c -9.824,9.824 -9.824,25.752 0,35.584 l 17.792,17.792 c 9.824,9.824 25.76,9.824 35.584,0 L 176,309.376 l 80.056,80.056 c 9.824,9.824 25.76,9.824 35.584,0 l 17.792,-17.792 c 9.824,-9.824 9.824,-25.752 0,-35.584 z" />
                                    ) : (
                                        <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
                                    )
                                }
                            </svg>
                        ) : null
                    }
                </nav>
            </header>
            <div ref={fsMenuRef} className={menu ? "fullscreen-menu show" : "fullscreen-menu"}>
                <Link keyName="about" canActivate={false} show={menu} />
                <Link keyName="projects" canActivate={false} show={menu} />
                <Link keyName="achievements" canActivate={false} show={menu} />
                <Link keyName="contact" canActivate={false} show={menu} />
            </div>
            <section id="home" style={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <h1 style={{ fontWeight: 100 }} className={load ? "title loaded" : "title"}>Bill <strong>Gan</strong></h1>
                <p className={load ? "desc loaded" : "desc"}>An Aspiring Developer</p>
            </section>

            <section id="about" className="g1">
                <h2 style={{ marginTop: 0 }} className="subtitle-left">About Me</h2>
                <p className="fade-in-below subdesc">I&apos;m Bill Gan, an incoming Computer Science student at the University of Waterloo. Here are some of my interests:</p>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                    {
                        about.map((entry, idx) => <Bubble key={idx} src={entry[0]}><h3>{entry[1]}</h3>{entry[2]}</Bubble>)
                    }
                </div>
            </section>
            <section id="projects" className="g2">
                <h2 style={{ marginTop: 0 }} className="subtitle-right">Projects</h2>
                <p className="fade-in-below" style={{ margin: "auto" }}>A list of in-progress or completed projects. Click on the cards to view more!</p>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                    {
                        projects.map((entry, idx) =>
                            <Card key={idx} title={entry[0]} src={entry[1]} url={entry[2]}>
                                <p style={{ fontSize: "2vh", margin: "1vh" }}>{entry[3]}</p>
                            </Card>
                        )
                    }
                </div>
            </section>
            <section id="achievements" className="g1">
                <h2 style={{ marginTop: 0 }} className="subtitle-left">Achievements</h2>
                {
                    //the map function renders out things from the array since each element is returning some jsx code
                    achievements.map((a, idx) => {
                        if (a.length == 1) return <h3 key={idx} className="fade-in-below">{a[0]}</h3>;
                        else return <p style={{ marginBottom: "1vh" }} key={idx} className="fade-in-below">{a[0]}: <span>{a[1]}</span> {a[2] && `(${a[2]})`}</p>;
                    })
                }
            </section>
            <section id="contact" className="g2" style={{ backgroundColor: "transparent", backgroundImage: "none" }}>
                <h2 style={{ marginTop: 0 }} className="subtitle-right">Contact</h2>
                {
                    /*<p className="fade-in-below" style={{marginTop: "2vh", marginBottom: "2vh"}}>Email: billgan12345@gmail.com</p>
                    <p className="fade-in-below" style={{marginBottom: "2vh"}}>Discord: pblpbl#5115</p>
                    <p className="fade-in-below" style={{marginBottom: "2vh"}}>Resume: </p>
                    <p className="fade-in-below" style={{marginBottom: "2vh"}}>Other Links: </p>*/
                }
                <p className="fade-in-below" style={{ marginTop: "1vh", marginBottom: "1vh" }}>Email: billgan12345@gmail.com</p>
                <p className="fade-in-below" style={{ marginBottom: "1vh" }}>Discord: pblpbl#5115</p>
                <p className="fade-in-below" style={{ marginBottom: "1vh" }}>Resume: <a className="inline-link" rel="noreferrer" href="https://drive.google.com/uc?export=download&id=1GCr9_-m8HNTvxb8DrIcDw1lLEI8wQuFm" download>Download</a></p>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {
                        contactSvg.map((entry, idx) =>
                            <a href={entry[0]} key={idx} style={{ width: "5vh", height: "5vh", margin: "2vh 3vh" }}>
                                <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox={entry[1]}>
                                    <path d={entry[2]} />
                                </svg>
                            </a>
                        )
                    }
                </div>
                <h3 className="fade-in-below" style={{ margin: 0 }}>Direct Message</h3>
                <Form />
                <hr />
                <p><small>&copy; 2021 Bill Gan</small></p>
                <p><small>Last updated: August 20, 2021</small></p>
            </section>
        </>
    );

    function initObserver() {
        //disable observer and enable everything if it's not supported
        if (!("IntersectionObserver" in window)) {
            matches.forEach(str => {
                document.querySelectorAll(str).forEach(entry => {
                    entry.classList.add("visible");
                });
            });
            return;
        }
        const options = { rootMargin: "-50%" };
        //observer tracks when things enter and exit
        const observer = new IntersectionObserver(entries => {
            //set key to the new section if we find it
            entries.forEach(entry => {
                const id = entry.target.getAttribute("id");
                if (entry.isIntersecting) {
                    setKey(id);
                    console.log(id, entry.intersectionRatio);
                }
            });
        }, options);

        document.querySelectorAll("section[id]").forEach(entry => {
            observer.observe(entry);
        });

        const options2 = { rootMargin: "-10%" };
        const viewObserver = new IntersectionObserver(entries => {
            let cnt = 0, delay = (160 + 30 * entries.length) / entries.length;
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => entry.target.classList.add("visible"), delay * (cnt++));
                }
            });
        }, options2);

        //note: when you're matching one class, the other classes in the elements don't matter
        //thus, we always track these things even after they get updated to be visible
        matches.forEach(str => {
            document.querySelectorAll(str).forEach(entry => {
                viewObserver.observe(entry);
            });
        });
    }
}
