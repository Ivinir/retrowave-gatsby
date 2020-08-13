import React from 'react';
import styles from './Taskbar.module.scss';
import LeftBox from './LeftBox/LeftBox.jsx';
import RightBox from './RighBox/RightBox.jsx';
import StartMenu from './StartMenu/StartMenu.jsx';

const Taskbar = () => (
  <div className={`taskbar ${styles.taskbar}`}>
    <StartMenu />
    <div className={`taskbar__inner ${styles.taskbar__inner}`}>
      <LeftBox />
      <RightBox />
    </div>
  </div>
);

export default Taskbar;
