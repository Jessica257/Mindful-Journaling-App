import React from "react";
import MindfulBreathing from "./MindfulBreathing";
import MindfulAppreciation from "./MindfulAppreciation";
import MindfulObservation from "./MindfulObservation";
import "../styles/MindfulnessExercises.css";

const MindfulnessExercises = () => {
  return (
    <div className="mindfulness-container">
      <h2 className="mindfulness-title">Mindfulness Exercises</h2>
      <p className="mindfulness-description">
        Try a short mindfulness exercise or meditation session.
      </p>
      <div className="mindful-exercise">
        <MindfulBreathing />
      </div>
      <div className="mindful-exercise">
        <MindfulAppreciation />
      </div>
      <div className="mindful-exercise">
        <MindfulObservation />
      </div>
    </div>
  );
};

export default MindfulnessExercises;
