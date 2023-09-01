import React from 'react';
import './App.css';
import { Grid } from './components/Grid';
import { allIcons } from './components/icons';
import { StatTable } from 'components/StatTable';

function App() {
  const X = 12;
  const Y = 20;
  const length = Object.values(allIcons).length;
  const randomIndices = Array.from({ length: X * Y }, () => Math.floor(Math.random() * length));

  const collectStatistics = (randomIndices, allIcons, fake = false) => {
    const stats = new Map();

    randomIndices.forEach((index) => {
      const iconEntry = Object.entries(allIcons)[index];
      if (iconEntry) {
        const [name, svg] = iconEntry;
        if (fake) {
          stats.set(name, -1)
        } else {
          stats.set(name, (stats.get(name) || 0) + 1);
        }
      }
    });

    return stats;
  };


  return (
    <div className="App">
      <section className="flex justify-center items-center bg-gray-200">
        <div className="flex flex-col bg-white-500 print:bg-white w-[210mm] h-[297mm] border border-black gap-4 justify-center items-center">
          <Grid X={X} Y={Y} randomIndices={randomIndices} />
          <StatTable stats={collectStatistics(randomIndices, allIcons, true)} />
        </div>
      </section>
      <section className="flex justify-center items-center bg-gray-200">
        <div className="bg-white-500 print:bg-white w-[210mm] h-[297mm] border border-black">
          <StatTable stats={collectStatistics(randomIndices, allIcons)} />
        </div>
      </section>
    </div>
  );
}

export default App;
