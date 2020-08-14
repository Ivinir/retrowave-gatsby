import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import styles from './DesktopIcon.module.scss';
import Image from '../../common/Image/Image.jsx';

const DesktopIcon = ({ label, image }) => {
  const { t } = useTranslation('common');

  return (
    <button
      className={`desktopIcon ${styles.desktopIcon}`}
      type="button"
    >
      <div
        className={`desktopIcon__image ${styles.desktopIcon__image}`}>
        <Image alt="placeholder" filename={image} />
      </div>
      <div
        className={`desktopIcon__label ${styles.desktopIcon__label}`}>
        {t(label)}
      </div>
    </button>
  );
};

DesktopIcon.propTyes = {
  label: PropTypes.string,
  image: PropTypes.string,
};

export default DesktopIcon;
