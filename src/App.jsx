
import Header from './components/Header/Header.jsx';
import TabButton from './components/TabButton/TabButton.jsx';
import {useState} from 'react';
import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';
function App() {
  
  return (
    <div>
      <Header/>
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </div>
  );
}

export default App;
