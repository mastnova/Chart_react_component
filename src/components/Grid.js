import React from 'react';

export default ({height, width, linesCount}) => {
    const margin = 4;
    let size = (height - margin) / (linesCount - 1);
    let lines= [];

    for(let i = 0; i < linesCount; i++) {
      let delta = (height - margin/2) - size*i;
      lines.push(<line key={i}
                       x1={0}
                       y1={delta}
                       x2={width}
                       y2={delta}
                       stroke="#d7d9dc"
                       strokeWidth={1}/>);
    }

    return <g>{lines}</g>;
  };
