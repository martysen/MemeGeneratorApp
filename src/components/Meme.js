import React from "react";
// Comment to replace with API call
// import memesData from "../memesData";

function Meme() {
  // creating a memeImage variable assigned to an empty string and a setter for memeImage
  // const [memeImage, setMemeImage] = React.useState(
  //   "https://i.imgflip.com/25w3.jpg"
  // );

  // function getMemeImage(e) {
  /**
   Within <form> element, if you don't do <button type = "button"> Click Me </button>
   Without the following line the page re-loads and state reverts back to original state
   Read more about default html form behavior: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type
   * 
   *  */
  // e.preventDefault();
  //   // memesData -> data -> memes[] -> key items
  //   const memesArray = memesData.data.memes;
  //   const randomNumber = Math.floor(Math.random() * memesArray.length);

  //   // Set the new state. Note we don't need to keep track of old image, so we will just pass the new url value and not a callback function
  //   setMemeImage(memesArray[randomNumber].url);
  // }

  /*** Alternative: Creating an Object that will store top and btm texts and Meme Image as object
   *   Then, saving the state of the object
   */
  const [meme, setMeme] = React.useState({
    topText: "sample",
    bottomText: "sample",
    randomImage: "https://i.imgflip.com/25w3.jpg",
  });

  // Grabbing our data repository and returning it back to allMemes for state management
  const [allMemes, setAllMemes] = React.useState([]);

  // API call to fetch the data
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes))
      .catch((err) => console.log(`Some error occurred in API call`));
  }, []);

  //test if data is fetched: array of objects
  console.log(allMemes);

  // Redefining our onClick()
  function getMemeImage(e) {
    // as we store the API into overall array we don't need the following 2 lines of code
    // const memesArray = allMemes.data.memes;
    // const memesArray = allMemes.memes;
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;

    // Set the new state, tracking previous memes and setting new url
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  // when user types the text, this function will update the state
  function handleChange(e) {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form-input"
          placeholder="Top Text Here"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form-input"
          placeholder="Bottom Text Here"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form-button" onClick={getMemeImage}>
          Select a new meme image
        </button>
      </div>
      {/* Use meme object as src to create an img element */}
      <div className="meme">
        <img src={meme.randomImage} className="meme-image" alt="" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
