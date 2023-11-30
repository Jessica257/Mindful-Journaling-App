import React, { useState } from "react";
import "../styles/ReflectionPrompts.css";

const ReflectionPrompts = () => {
  const [prompt, setPrompt] = useState("What are you grateful for today?");

  const changePrompt = (newPrompt) => {
    setPrompt(newPrompt);
  };

  return (
    <div className="reflection-prompts-container">
      <h2 className="reflectiom-title">Reflection Prompts</h2>
      <p className="cureent-prompt">Current Prompt: {prompt}</p>
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
