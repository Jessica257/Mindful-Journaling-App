import React, { useState } from "react";
import "../styles/Affirmations.css";
import balance from "../assets/images/balance.jpg";

const Affirmations = () => {
  const [affirmations, setAffirmations] = useState([
    "I am capable of achieving my goals.",
    "I radiate confiidence and positivity.",
    "I am worthy of love and success.",
    "I beleive in my abilities and potential.",
    "I choose peace over worry and joy over fear.",
    "I am worthy of happpiness.",
    "I have blessings in abundance.",
    "My possibilities are endless.",
    "I trust in the process of life and let go of what I cannot control.",
    "Every day, in every way, I am getting better and better.",
  ]);

  return (
    <div
      className="affirmations-container"
      style={{ backgroundImage: `url(${balance})` }}
    >
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
