import React from 'react';

export default ({x, y, height, visibility}) => {

  let d = `M ${x} ${y} L ${x} ${height}`;

  return(
    <g>
      <path d={d}
        strokeDasharray="5, 5"
        stroke="#d7d9dc"
        strokeWidth={1}
        fill="none"
        visibility={visibility}
      />
      <circle
        cx={x}
        cy={y}
        r={5}
        stroke="#fff"
        strokeWidth={2}
        fill="#81a9c8"
        visibility={visibility}
      />
    </g>
  )
};
