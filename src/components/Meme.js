import React from "react";
import memesData from "../memesData";

function Meme() {
  // creating a memeImage variable assigned to an empty string
  // and a setter for memeImage
  const [memeImage, setMemeImage] = React.useState("");

  function getMemeImage(e) {
    // Within <form> element, if you don't do <button type = "button"> Click Me </button>
    // Without the following line the page re-loads and state reverts back to original state
    // Read more about default html form behavior: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type
    // e.preventDefault();
    // memesData -> data -> memes[] -> key items
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);

    // Set the new state. Note we don't need to keep track of old image, so we will just pass the new url value and not a callback function
    setMemeImage(memesArray[randomNumber].url);
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
        <button className="form-button" onClick={getMemeImage} type="button">
          Select a new meme image
        </button>
      </form>
      {/* Use memeImage variable as src to create an img element */}
      <img src={memeImage} className="meme-image" alt="" />
    </main>
  );
}

export default Meme;
