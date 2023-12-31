import React, { useState } from "react";
import "../styles/ReflectionPrompts.css";
import reflection from "../assets/images/reflection.jpg";

const ReflectionPrompts = () => {
  const [prompt, setPrompt] = useState("What are you grateful for today?");

  const changePrompt = (newPrompt) => {
    setPrompt(newPrompt);
  };

  return (
    <div
      className="reflection-prompts-container"
      style={{ backgroundImage: `url(${reflection})` }}
    >
      <h2 className="reflection-title">Reflection Prompts</h2>
      <p className="current-prompt">Current Prompt: {prompt}</p>
      <div className="prompt-buttons">
        <button
          onClick={() => changePrompt("What brought you joy today?")}
          className="prompt-button"
        >
          Joy Prompt
        </button>
        <button
          onClick={() => changePrompt("Reflect on a recent challenge.")}
          className="prompt-button challenge"
        >
          Challenge Prompt
        </button>
      </div>
    </div>
  );
};

export default ReflectionPrompts;
