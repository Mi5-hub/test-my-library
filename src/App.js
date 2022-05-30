import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Table from "./component/Table";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Table/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
