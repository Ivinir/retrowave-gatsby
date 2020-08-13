import React from 'react';
import styles from './Taskbar.module.scss';
import StartMenu from '../StartMenu/StartMenu.jsx';

const Taskbar = () => (
  <div className={`taskbar ${styles.taskbar}`}>
    <StartMenu />
    <div className={`taskbar__inner ${styles.taskbar__inner}`}>
      TASKBAR
    </div>
  </div>
);

export default Taskbar;
