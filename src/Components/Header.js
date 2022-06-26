import React from "react";
import "../index.css"

export default function Header(){
    return(
        <div className = "navbar">
            <img className = "navbar_image" src = "/images/troll_icon.png" />
            <h2 className="navbar_h1">Meme Generator</h2>
            <h4 className="navbar_h4">React- Project 3</h4>
        </div>
    )
}