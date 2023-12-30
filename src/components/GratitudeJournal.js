import React, { useEffect, useState } from "react";
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from "../services/storageService";
import "../styles/GratitudeJournal.css";
import gj from "../assets/images/gj.jpg";

const GratitudeJournal = () => {
  const [gratitudeEntries, setGratitudeEntries] = useState([]);
  const [newEntry, setNewEntry] = useState("");
  const [showEmptyEntryMessage, setShowEmptyEntryMessage] = useState(false);

  useEffect(() => {
    const savedEntries = loadFromLocalStorage("gratitudeEntries");
    if (savedEntries) {
      setGratitudeEntries(savedEntries);
    }
  }, []);

  const addEntry = () => {
    if (newEntry.trim() === "") {
      setShowEmptyEntryMessage(true);
      return;
    }

    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()}`;
    const entryWithDate = `${formattedDate}: ${newEntry}`;
    setGratitudeEntries([...gratitudeEntries, entryWithDate]);
    saveToLocalStorage("gratitudeEntries", [
      ...gratitudeEntries,
      entryWithDate,
    ]);
    setNewEntry("");
    setShowEmptyEntryMessage(false);
  };

  const deleteEntry = (index) => {
    const updatedEntries = [...gratitudeEntries];
    updatedEntries.splice(index, 1);
    setGratitudeEntries(updatedEntries);
    saveToLocalStorage("gratitudeEntries", updatedEntries);
  };

  return (
    <div
      className="gratitude-container"
      style={{ backgroundImage: `url(${gj})` }}
    >
      <h2 className="gratitude-title">Gratitude Journal</h2>
      <input
        type="text"
        value={newEntry}
        onChange={(e) => setNewEntry(e.target.value)}
        className="gratitude-input"
      />
      <button onClick={addEntry} className="gratitude-button">
        Add Entry
      </button>
      {showEmptyEntryMessage && (
        <p style={{ color: "red" }}>Please enter a valid entry.</p>
      )}
      <ul className="gratitude-list">
        {gratitudeEntries.map((entry, index) => (
          <li key={index} className="gratitude-list-item">
            {entry}
            <button
              onClick={() => deleteEntry(index)}
              className="delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GratitudeJournal;
