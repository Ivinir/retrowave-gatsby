import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LeftBox.module.scss';

const LeftBox = () => {
  const { t } = useTranslation('common');

  return (
    <div className={`leftBox ${styles.leftBox}`}>
      <span>
        {t('taskbar.leftBox.start')}
      </span>
    </div>
  );
};

export default LeftBox;
