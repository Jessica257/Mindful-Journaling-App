import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import GratitudeJournal from "./components/GratitudeJournal";
import Affirmations from "./components/Affirmations";
import MindfulnessExercises from "./components/MindfulnessExercises";
import MoodTracking from "./components/MoodTracking";
import ReflectionPrompts from "./components/ReflectionPrompts";
import VisualJournaling from "./components/VisualJournaling";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/gratitude" element={<GratitudeJournal />} />
          <Route path="/affirmations" element={<Affirmations />} />
          <Route path="/exercises" element={<MindfulnessExercises />} />
          <Route path="/tracking" element={<MoodTracking />} />
          <Route path="/reflection" element={<ReflectionPrompts />} />
          <Route path="/visual" element={<VisualJournaling />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
