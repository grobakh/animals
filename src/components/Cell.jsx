import React from "react";

export const Cell = ({ width, height, icon }) => {
  const cellStyle = `
    w-full h-full
    p-0.5
    flex items-center justify-center
  `;

  const iconSize = Math.min(width, height);

  return (
    <div className={cellStyle}>
      <img src={icon} className="w-full h-full" />
    </div>
  );
};