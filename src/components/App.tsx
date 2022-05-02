import React from "react";
import Menu from './components/Menu';
import Article from './components/Article';
import HomePage from './components/HomePage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App: React.FC = () => {
return (
    <div className="App">
          <Router>
              <Menu/>
            <div>
              <Routes >
                <Route path="/article" element={<Article/>} />
                <Route path="/" element={<HomePage/>} />
                <Route index element={<HomePage/>} />
              </Routes >
            </div>
          </Router>
    </div>
)}

export default App;
