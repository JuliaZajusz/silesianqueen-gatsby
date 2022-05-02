import React from "react";

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
