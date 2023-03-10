import React from 'react';
import './BreakTimes.css';

function BreakTimes({handleAddTime, handleAddTimeS, handleAddTimeT, handleAddTimeF, handleAddTimeFv}) {
  // let breakTime;

  return (
    <div>
        <h4>Add a Break</h4>
     
        <div className='btn-time-container'>
            <button className='btn-time' onClick={handleAddTime}>10s</button>
            <button className='btn-time' onClick={handleAddTimeS}>20s</button>
            <button className='btn-time' onClick={handleAddTimeT}>30s</button>
            <button className='btn-time' onClick={handleAddTimeF}>40s</button>
            <button className='btn-time' onClick={handleAddTimeFv}>50s</button>
        </div>
    </div>
  )
}

export default BreakTimes;