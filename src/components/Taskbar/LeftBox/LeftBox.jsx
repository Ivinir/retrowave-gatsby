import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LeftBox.module.scss';
import StartMenuContext from '../../../context/StartMenuContext';

const LeftBox = () => {
  const { t } = useTranslation('common');
  const [startMenu, setStartMenu] = useContext(StartMenuContext);

  return (
    <button
      type="button"
      className={`leftBox ${styles.leftBox}`}
      onClick={() => { setStartMenu({ isActive: !startMenu.isActive }); }}
    >
      <span>
        {t('taskbar.leftBox.start')}
      </span>
    </button>
  );
};

export default LeftBox;
