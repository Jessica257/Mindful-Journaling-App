import React, { useState, useEffect } from "react";
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from "../services/storageService";
import "../styles/MoodTracking.css";

const MoodTracking = () => {
  const [mood, setMood] = useState("");
  const [recordedMoods, setRecordedMoods] = useState([]);

  useEffect(() => {
    const savedMoods = loadFromLocalStorage("recordedMoods");
    if (savedMoods) {
      setRecordedMoods(savedMoods);
    }
  }, []);

  const recordMood = (selectedMood) => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()}`;
    const moodEntry = { mood: selectedMood, date: formattedDate };

    setMood(selectedMood);
    setRecordedMoods([...recordedMoods, moodEntry]);
    saveToLocalStorage("mood", selectedMood);
    saveToLocalStorage("recordedMoods", [...recordedMoods, moodEntry]);
  };

  const deleteMoodEntry = (index) => {
    const updatedMoods = [...recordedMoods];
    updatedMoods.splice(index, 1);
    setRecordedMoods(updatedMoods);
    saveToLocalStorage("recordedMoods", updatedMoods);
  };

  return (
    <div className="mood-tracking-container">
      <h2 className="mood-title">Mood Tracking</h2>
      <p className="current-mood">Current Mood: {mood || "Not recorded"}</p>
      <div className="mood-buttons">
        <button onClick={() => recordMood("Happy")} className="mood-button">
          Happy
        </button>
        <button
          onClick={() => recordMood("Neutral")}
          className="mood-button neutral"
        >
          Neutral
        </button>
        <button onClick={() => recordMood("Sad")} className="mood-button sad">
          Sad
        </button>
      </div>
      <ul className="recorded-moods-list">
        {recordedMoods.map((entry, index) => (
          <li key={index} className="recorded-mood-item">
            {`${entry.date}: ${entry.mood}`}
            <button
              onClick={() => deleteMoodEntry(index)}
              className="delete-mood-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoodTracking;
