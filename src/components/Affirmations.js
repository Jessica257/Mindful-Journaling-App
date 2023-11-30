import React, { useState } from "react";
import "../styles/Affirmations.css";

const Affirmations = () => {
  const [affirmations, setAffirmations] = useState([
    "I am capable of achieving my goals.",
    "I radiate confiidence and positivity.",
    "I am worthy of love and success.",
  ]);

  return (
    <div className="affirmations-container">
      <h2 className="affirmations-title">Affirmations</h2>
      <ul className="affirmations-list">
        {affirmations.map((affirmation, index) => (
          <li key={index} className="affirmations-item">
            {affirmation}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Affirmations;
