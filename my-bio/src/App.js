import React from "react";
import "./App.css";
import BioComponent from "./BioComponent";

// App component containing the main structure of the website
function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Welcome to My Personal Website</h1>
      </header>
      <nav>{/* Navigation links can be added here if needed */}</nav>
      <main>
        <BioComponent />
        {/* Additional components/content can be added here */}
      </main>
      <footer>{/* Footer content can be added here */}</footer>
    </div>
  );
}

export default App;
