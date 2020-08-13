import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './RightBox.module.scss';

const RightBox = () => {
  const { t } = useTranslation('common');

  return (
    <div className={`leftBox ${styles.leftBox}`}>
      <span>
        {t('taskbar.rightBox.start')}
      </span>
    </div>
  );
};

export default RightBox;
