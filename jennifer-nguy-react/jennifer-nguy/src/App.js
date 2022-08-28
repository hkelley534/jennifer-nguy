import React from 'react';
import MobileNavigation from './MobileNavigation';
import Introduction from './Introduction';
import Works from './Works';

function App() {
  return (
    <div className="App">
      <MobileNavigation />
      <main>
        <Introduction />
        <Works />
      </main>

    </div>
  );
}

export default App;
