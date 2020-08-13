import React, { useContext } from 'react';
import styles from './StartMenu.module.scss';
import StartMenuContext from '../../context/StartMenuContext';

const StartMenu = () => {
  const [startMenu] = useContext(StartMenuContext);

  return (
    <div className={
      `startMenu 
      ${styles.startMenu} 
      ${!startMenu.isActive ? styles.startMenuHidden : ''}`} >
      StartMenu
    </div >
  );
};

export default StartMenu;
