import React from 'react';
// import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter} from 'react-router-dom';
import Home from './Home'

function App() {
  return (
    <BrowserRouter basename="/index.html">
      <div className="App">
            <Route path="/index.html">
              <Home />
            </Route>


      </div>
    </BrowserRouter>
  );
}

export default App;
