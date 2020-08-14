import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './StartMenuLeft.module.scss';

const StartMenu = () => {
  const { t } = useTranslation('common');
  return (
    <div className={`startMenuLeft ${styles.startMenuLeft}`} >
      <span className={`startMenuLeft ${styles.startMenuLeft__text}`} >{t('startMenu.myName')}</span>
    </div>
  );
};

export default StartMenu;
