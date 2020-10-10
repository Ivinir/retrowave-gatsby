import React, { useState, useEffect } from 'react';
import styles from './Clock.module.scss';

const Clock = () => {
  const [time, setTime] = useState(() => new Date());

  function getTime() {
    setTime(new Date());
    setTime(time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }));
  }

  useEffect(() => {
    getTime();
    const timerID = setInterval(() => {
      getTime();
    }, 10000);
    return () => {
      clearInterval(timerID);
    };
  });

  return (
    <span className={`clock ${styles.clock}`}>{time.toString()}</span>
  );
};

export default Clock;
