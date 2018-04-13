import React from 'react';

const Counter = ({ macroTitle, macroCount }) => {
  return (
    <div className="counter">
      <h2 className="counterMacroTitle">{macroTitle}</h2>
      <div className="counterPercentage">
        <h2>{macroCount}</h2>
      </div>
      <div className="progress">
        <div className="determinate" style={{ width: `${macroCount}` }} />
      </div>
    </div>
  );
};

export default Counter;
