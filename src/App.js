import React, { useState } from "react";
import "./App.css";

var emojiDictionary = {
  "π": "smiling",
  "π": "sad",
  "π₯‘": "takeOutBox",
  "β€": "love",
  "π": "annoying",
  "π": "Upside-Down Face",
  "π": "Winking Face",
  "π": "Face with Tongue",
  "π€": "Thinking Face",
  "πΆβπ«οΈ": " Face in Clouds"
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  const inputHandeler = (e) => {
    const userInput = e.target.value;

    const meaning = emojiDictionary[userInput];

    meaning === undefined
      ? setMeaning("we dont have this in our database")
      : setMeaning(meaning);
  };
  const emojiHandeler = (emoji) => {
    setMeaning(emojiDictionary[emoji]);
  };
  return (
    <div className="App">
      <h1>Inside Out !!</h1>

      <input onChange={inputHandeler} />

      <h2>Meaning : {meaning}</h2>
      {emojis.map((emoji, index) => {
        return (
          <span
            key={index}
            onClick={() => emojiHandeler(emoji)}
            style={{ padding: "1rem", fontSize: "2rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
