import React from 'react';
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
