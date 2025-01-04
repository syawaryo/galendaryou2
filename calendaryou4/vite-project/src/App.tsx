import React from 'react';
import DataPicker from './calender.tsx';
import './App.css';
import { Desktop } from './components/desktop.tsx';
import { Frame9 } from './components/frame9.tsx';

function App() {
  return (
    <div>
      <Desktop>
        <Frame9>
          <DataPicker/>
        </Frame9>
      </Desktop>
    </div>
  )
}

export default App;
