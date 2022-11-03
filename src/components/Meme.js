import React from "react";
import memesData from "../memesData";

function Meme() {
  // creating a memeImage variable assigned to an empty string
  // and a setter for memeImage
  const [memeImage, setMemeImage] = React.useState(
    "https://i.imgflip.com/261o3j.jpg"
  );

  // Set the new state. Note we don't need to keep track of old image, so we will just pass the new url value and not a callback function
  function getMemeImage() {
    // memesData -> data -> memes[] -> key items
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    console.log(randomNumber);

    setMemeImage(memesArray[randomNumber].url);
    console.log(`Value of memeImage is ${memesArray[randomNumber].url}`);
  }

  return (
    <main>
      <form className="form">
        <input type="text" className="form-input" placeholder="Top Text Here" />
        <input
          type="text"
          className="form-input"
          placeholder="Bottom Text Here"
        />
        <button className="form-button" onClick={getMemeImage}>
          Select a new meme image
        </button>
      </form>
      {/* Use memeImage variable as src to create an img element */}
      <p> The value of url is {memeImage}</p>
      <img src={memeImage} className="meme-image" alt="" />
    </main>
  );
}

export default Meme;
