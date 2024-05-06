import { useState } from "react";
import "./App.css";

export default function App() {
  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };
  const [inputText, setinputText] = useState("");
  const [suggestedText, setsuggestedText] = useState("");
  function handleInputChange(e) {
    const text = e.target.value;
    setinputText(text);

    // Implement a basic spelling check and correction
    const words = text.split(" ");
    const correctedWords = words.map((word) => {
      const correctedWord = customDictionary[word.toLowerCase()];
      return correctedWord || word;
    });

    const correctedText = correctedWords.join(" ");

    // Set the suggested text (first corrected word)
    const firstCorrection = correctedWords.find(
      (word, index) => word !== words[index]
    );
    setsuggestedText(firstCorrection || "");
  }
  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <input type="text" value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text..."/>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text..."
        rows={5}
        cols={40}
      />
      {suggestedText && (
        <p>
          Did you mean: {suggestedText}?
        </p>
      )}
    </div>
  );
}