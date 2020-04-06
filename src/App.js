import React from "react";

import TeamsList from "./components/TeamsList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Expense approvals</h1>
      </header>
      <main>
        <TeamsList />
      </main>
    </div>
  );
}

export default App;
