import React from "react";

export const StatTable = ({ stats }) => (
    <div className="grid grid-cols-8 gap-1">
        {Array.from(stats).map(([name, count], index) => (
            <div key={index} className="bg-gray-50 p-2 rounded border">
                <div className="text-sm font-medium text-gray-900">{name}</div>
                <div className="text-sm text-gray-600">{count === -1 ? '___' : count}</div>
            </div>
        ))}
    </div>
);