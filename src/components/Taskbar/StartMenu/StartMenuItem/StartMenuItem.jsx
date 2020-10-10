import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styles from './StartMenuItem.module.scss';
import Image from '../../../common/Image/Image.jsx';

const StartMenuItem = ({ image, label }) => {
  const { t } = useTranslation('common');

  return (
    <button
      className={`startMenuItem ${styles.startMenuItem}`}
      type="button"
    >
      <div className={`startMenuItem__image ${styles.startMenuItem__image}`}>
        <Image alt="placeholder" filename={image} />
      </div>
      <div className={`startMenuItem___text ${styles.startMenuItem__text}`} >
        {t(label)}
      </div>
    </button>
  );
};

StartMenuItem.propTypes = {
  image: PropTypes.string,
  label: PropTypes.string,
};

export default StartMenuItem;
