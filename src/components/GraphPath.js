import React from 'react';

export default ({data}) => {

  const x = data[0][0];
  const y = data[0][1];

  let d = [`M ${x} ${y}`];

  const points = data.slice(1, data.length);
  const collector = points.map(chunk => `L ${chunk[0]} ${chunk[1]}`);

  d = d.concat(collector).join(' ');

  return (
    <path d={d}
      stroke="#81a9c8"
      strokeWidth={2}
      fill="none"
    />
  );
}
