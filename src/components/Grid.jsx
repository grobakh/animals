import React from 'react';
import { Cell } from './Cell';
import { allIcons } from './icons';

export const Grid = ({ X, Y, randomIndices }) => {
  const cellWidth = Math.floor(210 / X);  // 210mm is the width of an A4 paper. You can set this size according to your requirements.
  const cellHeight = Math.floor(277 / Y); // 297mm is the height of an A4 paper.

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${X}, ${cellWidth}mm)`,
    gridTemplateRows: `repeat(${Y}, ${cellHeight}mm)`
  };

  const values = Object.values(allIcons);

  return (
    <div style={gridStyle}>
      {Array.from({ length: Y }, (_, y) =>
        Array.from({ length: X }, (_, x) => {
          const index = y * X + x;
          const RandomIcon = values[randomIndices[index]]; // Get random icon based on index
          return (
            <Cell key={`${x}-${y}`} icon={RandomIcon} width={cellWidth} height={cellHeight} />
          );
        })
      ).flat()}
    </div>
  );
};