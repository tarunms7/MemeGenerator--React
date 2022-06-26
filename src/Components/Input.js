import React from "react";
import "../index.css"
import memeData from "../Data/memeData";
export default function Input(){
    const [memeImage, setMemeImage] = React.useState("")
    const Data = memeData.data.memes 
    function handleClick(){
        // console.log(memeData)
        setMemeImage(Data[Math.floor(Math.random() * Data.length)].url)
    }
    return(
        <div className = "inputs_main">
            <div className="form">
                <input className = "form--box1" type="text" placeholder="Top Text"/>
                <input className = "form--box2" type="text" placeholder="Bottom Text"/>
                <button onClick = {handleClick} className="form--btn">Get a new meme image</button>
            </div>
            <div className = "CreateMeme">
                {memeImage && <img className = "memeImage" src = {memeImage}/>}
            </div>
        </div>
        
    )
}