import React, { useState } from "react";
import "./App.css";
import Footer from "./Footer";

const alphabetList = ["A", "B", "C", "D", "E", "F", "G", "H"];

const App = () => {
  const [selectedAlphabet, setSelectedAlphabet] = useState(null);

  const handleAlphabetClick = (alphabet) => {
    setSelectedAlphabet(alphabet);
    const audio = new Audio(
      `${process.env.PUBLIC_URL}/${alphabet.toLowerCase()}.mp3`
    );
    audio.play();
  };

  return (
    <div className="App">
      <h1>Alphabet Game</h1>
      <h2>Select an Alphabet</h2>
      <div className="alphabet-container">
        {alphabetList.map((alphabet) => (
          <div
            key={alphabet}
            className={`alphabet ${
              selectedAlphabet === alphabet ? "selected" : ""
            }`}
            onClick={() => handleAlphabetClick(alphabet)}
          >
            {alphabet}
          </div>
        ))}
      </div>
      {selectedAlphabet && (
        <div className="gif-container">
          <img
            src={`${process.env.PUBLIC_URL}/${selectedAlphabet}.gif`}
            alt={`GIF for ${selectedAlphabet}`}
          />
        </div>
      )}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
