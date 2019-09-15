import React from 'react';
import './App.css';
import placeholderAvatar from './placeholderAvatar.jpg';
import ProfileAvatar from './ProfileAvatar.js';
import styles from './stylesheet.css';

function App() {
  return (
    <div className="App">
      <header className="header" id="headerThings">
        <h1 id="title">Save the News</h1>
        <ProfileAvatar username="my username" avatar={placeholderAvatar}/>
      </header>
    </div>
  );
}




export default App;
