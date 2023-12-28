import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import positive from "../assets/images/positive.jpg";
import diary from "../assets/images/diary.jpg";
import yoga from "../assets/images/yoga.jpg";
import "../styles/Home.css";

const Home = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const backgrounds = [positive, diary, yoga];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="content-container"
      style={{
        backgroundImage: `url(${backgrounds[backgroundIndex]})`,
      }}
    >
      <div id="sidebar">
        <header>
          <h1>Mindful Journaling App</h1>
          <h4>Enhance your well-being through mindful journaling</h4>
        </header>

        <section className="features-section">
          <h2>Features</h2>
          <ul>
            <li>Gratitude Journaling</li>
            <li>Affirmations</li>
            <li>Mindfulness Exercises</li>
            <li>Mood Tracking</li>
            <li>Reflection Prompts</li>
            <li>Visual Journaling</li>
          </ul>
        </section>

        <section className="how-to-use-section">
          <h2>How to Use</h2>
          <ol>
            <li>Create a new entry in the Gratitude Journal.</li>
            <li>Track your mood for the day.</li>
            <li>Add visual elements to your journal.</li>
            <li>Practice mindful exercises.</li>
          </ol>

          <Link to="/gratitude" className="explore-button">
            Explore the App
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Home;
