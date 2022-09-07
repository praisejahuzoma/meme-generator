import React from "react"
import memeData from "../memesData.js"

function Meme() {

    function getMemeImage() {
        const memesArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
    }

    return (
        <main>
            <form className="form">
                <input className="form-input" placeholder="Top text" type="text" />
                <input className="form-input" placeholder="Bottom text" type="text" />
                <button className="form-button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </form>
        </main>
    )
}

export default Meme 
