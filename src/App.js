import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/gratitude" component={GratitudeJournal} />
          <Route path="/affirmations" component={Affirmations} />
          <Route path="/exercises" component={MindfulnessExercises} />
          <Route path="/tracking" component={MoodTracking} />
          <Route path="/reflection" component={ReflectionPrompts} />
          <Route path="/visual" component={VisualJournaling} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
