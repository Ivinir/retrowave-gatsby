import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LeftBox.module.scss';
import StartMenuContext from '../../../context/StartMenuContext';
import Image from '../../common/Image/Image.jsx';

const LeftBox = () => {
  const { t } = useTranslation('common');
  const [startMenu, setStartMenu] = useContext(StartMenuContext);

  return (
    <button
      type="button"
      className={`leftBox ${styles.leftBox}
        ${startMenu.isActive ? styles.leftBoxActive : ''}`
      }
      onClick={() => { setStartMenu({ isActive: !startMenu.isActive }); }}
    >
      <div className={`leftBox__imageContainer ${styles.leftBox__imageContainer} `}>
        <Image alt="Windows logo" filename="windows-logo.png" />
      </div>
      <span>
        {t('taskbar.leftBox.start')}
      </span>
    </button>
  );
};

export default LeftBox;
