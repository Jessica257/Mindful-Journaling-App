import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/gratitude">Gratitude Journal</Link>
        </li>
        <li>
          <Link to="/affirmations">Affirmations</Link>
        </li>
        <li>
          <Link to="/exercises">Mindfulness Exercises</Link>
        </li>
        <li>
          <Link to="/tracking">Mood Tracking</Link>
        </li>
        <li>
          <Link to="/reflection">Reflection Prompts</Link>
        </li>
        <li>
          <Link to="/visual">Visual Journaling</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
