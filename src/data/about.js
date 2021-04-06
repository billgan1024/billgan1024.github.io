import React from "react";
import game from "../assets/game-controller.svg";
import reacticon from "../assets/react.png";
import infoindex from "../assets/infoindex.png";
import math from "../assets/math.png";
import music from "../assets/music.png";
import cpp from "../assets/c++.svg";

const about = [
    //[image source, heading, jsx code for description]
    [game, "Game Development", <p key="">I made 8 games with the Gamemaker: Studio 2 engine. Check out my <a className="inline-link" target="_blank" rel="noreferrer" href="https://pblpbl.itch.io/">game developer profile</a> on itch.io!</p>],
    [reacticon, "App Creation", <p key={0}>I am currently learning how to create various apps using React, Firebase, and Google Cloud Platorm.</p>],
    [infoindex, "Educational Channel Founder", <p key={0}>I co-founded <a className="inline-link" target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCU_ac4-HfFnXykqnoCHQD_Q">Info Index</a>, an educational channel designed to enlighten students about various school subjects. I teach advanced topics in math and computer science.</p>],
    [math, "Math Contests", <p key={0}>I have learned many fascinating problem-solving strategies in participating in numerous math concepts.</p>],
    [music, "Digital Music Composition", <p key={0}>I created 10 electronic dance songs with FL Studio 12. Check them out at my music channel <a className="inline-link" target="_blank" rel="noreferrer" href="https://youtube.com/c/FormsTunes">here</a>!</p>],
    [cpp, "Competitive Programming", <p key={0}>I am an avid competitive programmer. I solve problems on <a className="inline-link" target="_blank" rel="noreferrer" href="https://dmoj.ca/user/pblpbl">DMOJ</a> and <a className="inline-link" target="_blank" rel="noreferrer" href="https://codeforces.com/profile/pblpbl">Codeforces</a>.</p>]
];

export default about;