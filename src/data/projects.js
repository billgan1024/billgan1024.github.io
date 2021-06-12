import escape from "../assets/thumbnails/escape.png";
import reminderbot from "../assets/thumbnails/reminderbot.png";
import songtracker from "../assets/thumbnails/songtracker.png";
import spaceshooters from "../assets/thumbnails/spaceshooters.png";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const projects = [
    //[title, image source, link, description]
    ["Escape", escape, "https://pblpbl.itch.io/escape", "An action platformer game I started during Hack the North 2021. Collect coins and reach the goal while dodging various obstacles."],
    ["ReminderBot", reminderbot, "https://github.com/pblpbl1024/reminder-bot", "A lightweight Discord bot that allows you to set reminders to ping yourself at a later time using commands. Made with Discord.js and MongoDB."],
    ["Song Tracker", songtracker, "https://github.com/pblpbl1024/song-tracker", "A web app that uses Spotify's web API to get the top tracks of artists. After searching for an artist, click on the track to listen to a 30-second preview."],
    ["Space Shooters", spaceshooters, "https://pblpbl.itch.io/space-shooters", "A bullet hell game in which you fight enemy ships using lasers and various abilities. There are various skills, enemies, and boss fights, so get ready for a challenge!"]
];

export default projects;