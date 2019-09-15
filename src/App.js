import React from 'react';

// import './App.css';
// import placeholderAvatar from './placeholderAvatar.jpg';
// import ProfileAvatar from './ProfileAvatar.js';
// import styles from './stylesheet.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="header" id="headerThings">
//         <h1 id="title">Save the News</h1>
//         <ProfileAvatar username="my username" avatar={placeholderAvatar}/>
//       </header>
//     </div>

import logo from './logo.svg';
import HomeFeed from './pages/HomeFeed'
import Article from './pages/Article'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomeFeed} />
        <Route path="/article/*" exact component={Article} />
      </div>
    </Router>
  );
}




export default App;
