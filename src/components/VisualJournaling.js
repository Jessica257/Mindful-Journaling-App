import React, { useState } from "react";
import "../styles/VisualJournaling.css";
import visual from "../assets/images/visual.jpg";

const VisualJournaling = () => {
  const [visualEntries, setVisualEntries] = useState([]);

  const addVisualEntry = () => {
    const imageURLs = [
      "https://image.petmd.com/files/styles/978x550/public/2023-04/kitten-development.jpeg?w=2048&q=75",
      "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg",
    ];

    setVisualEntries([...visualEntries, ...imageURLs]);
  };

  return (
    <div
      className="visual-journal-container"
      style={{ backgroundImage: `url(${visual})` }}
    >
      <h2 className="visual-journal-title">Visual Journaling</h2>
      <input
        type="text"
        placeholder="https://image.petmd.com/files/styles/978x550/public/2023-04/kitten-development.jpeg?w=2048&q=75"
        className="visual-input"
      />
      <button onClick={addVisualEntry} className="visual-entry-button">
        Add Visual Entry
      </button>
      <div className="visual-entry-container">
        {visualEntries.map((entry, index) => (
          <img
            key={index}
            src={entry}
            alt={`Visual Journal ${index}`}
            className="visual-entry-image"
          />
        ))}
      </div>
    </div>
  );
};

export default VisualJournaling;
