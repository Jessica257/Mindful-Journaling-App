import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import GratitudeJournal from "./components/GratitudeJournal";
import Affirmations from "./components/Affirmations";
import MindfulnessExercises from "./components/MindfulnessExercises";
import MoodTracking from "./components/MoodTracking";
import ReflectionPrompts from "./components/ReflectionPrompts";
import VisualJournaling from "./components/VisualJournaling";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/gratitude" component={GratitudeJournal} />
          <Route path="/affirmations" component={Affirmations} />
          <Route path="/exercises" component={MindfulnessExercises} />
          <Route path="/tracking" component={MoodTracking} />
          <Route path="/reflection" component={ReflectionPrompts} />
          <Route path="/visual" component={VisualJournaling} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
