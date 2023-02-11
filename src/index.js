import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/header/Header';
import Body from './components/body/Body';
import Skills from './components/skills/Skill';
import Projects from './components/projects/Projects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Body></Body>
    <Skills></Skills>
    <Projects></Projects>
  </React.StrictMode>
);

