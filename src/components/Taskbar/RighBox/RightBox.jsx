import React, { useState, useEffect } from 'react';
import styles from './RightBox.module.scss';
import LanguageSelector from './LanguageSelector/LanguageSelector.jsx';
import Clock from './Clock/Clock.jsx';

const RightBox = () => {
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
    <div className={`rightBox ${styles.taskbarRightBox}`}>
      <LanguageSelector />
      <Clock />
    </div>
  );
};

export default RightBox;
