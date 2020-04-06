import React from "react";

import TeamsList from "./components/TeamsList";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="px-4 bg-gray-800">
        <div className="flex items-center container mx-auto h-16">
          <h1 className="text-base leading-6 text-white font-semibold tracking-wide uppercase">
            Expense approvals
          </h1>
        </div>
      </nav>
      <main className="flex-1 p-4 bg-gray-100">
        <div className="container mx-auto">
          <TeamsList />
        </div>
      </main>
    </div>
  );
}

export default App;
