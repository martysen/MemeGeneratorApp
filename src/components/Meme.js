import React from "react";
import memesData from "../memesData";

function Meme() {
  // creating a memeImage variable assigned to an empty string
  // and a setter for memeImage
  const [memeImage, setMemeImage] = React.useState("");

  function getMemeImage(e) {
    // Without this the page re-loads and state reverts back to original state
    e.preventDefault();
    // memesData -> data -> memes[] -> key items
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);

    // Set the new state. Note we don't need to keep track of old image, so we will just pass the new url value and not a callback function
    setMemeImage(memesArray[randomNumber].url);
    // console.log(randomNumber);
    // console.log(`Value of memeImage is ${memesArray[randomNumber].url}`);
  }

  React.useEffect(() => {
    console.log(memeImage);
  }, [memeImage]);

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
      <img src={memeImage} className="meme-image" alt="" />
    </main>
  );
}

export default Meme;
