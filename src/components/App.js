import React from 'react';
import {dataDisplay} from './transactions.js';

import './App.css';

function App() {
  return (
    <div className="App" >
      <h1>Reward Point Calculator</h1>
      <div className="container-sm text-left col-md-6">
             {dataDisplay}
          </div>
    </div>
  );
}

export default App;
