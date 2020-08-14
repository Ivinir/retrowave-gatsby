import React, { useContext } from 'react';
import styles from './StartMenu.module.scss';
import StartMenuContext from '../../../context/StartMenuContext';
import StartMenuRight from './StartMenuRight/StartMenuRight.jsx';
import StartMenuLeft from './StartMenuLeft/StartMenuLeft.jsx';

const StartMenu = () => {
  const [startMenu] = useContext(StartMenuContext);

  return (
    <div className={
      `startMenu 
      ${styles.startMenu} 
      ${!startMenu.isActive ? styles.startMenuHidden : ''}`} >
      <StartMenuLeft />
      <StartMenuRight />
    </div >
  );
};

export default StartMenu;
