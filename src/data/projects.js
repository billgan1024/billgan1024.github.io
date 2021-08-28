import escape from "../assets/thumbnails/escape.png";
import reminderbot from "../assets/thumbnails/reminderbot.png";
import songtracker from "../assets/thumbnails/songtracker.png";
import spaceshooters from "../assets/thumbnails/spaceshooters.png";
import algovis from "../assets/thumbnails/algovis.png";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const projects = [
    //[title, image source, link, description]
    ["Escape", escape, "https://pblpbl.itch.io/escape", "An action platformer game I started during Hack the North 2021. Collect coins and reach the goal while dodging various obstacles."],
    ["ReminderBot", reminderbot, "https://github.com/pblpbl1024/reminder-bot", "A lightweight Discord bot that allows you to set reminders to ping yourself at a later time using commands. Made with Discord.js and MongoDB."],
    ["Song Tracker", songtracker, "https://github.com/pblpbl1024/song-tracker", "A web app that uses Spotify's web API to get the top tracks of artists. After searching for an artist, click on the tracks to preview them."],
    ["Algorithms Visualizer", algovis, "https://pblpbl1024.github.io/algorithms-visualizer/sort", "An interactive web app that simulates various sorting algorithms like bubble sort, merge sort, and quick sort. Made with React, HTML, and CSS."],
    ["Space Shooters", spaceshooters, "https://pblpbl.itch.io/space-shooters", "A bullet hell game in which you fight enemy ships and dodge asteroids. Use various abilities tactically to survive."],
];

export default projects;