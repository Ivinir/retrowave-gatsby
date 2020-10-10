import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styles from './TaskbarItem.module.scss';
import Image from '../../../common/Image/Image.jsx';

const TaskbarItem = ({ image, label }) => {
  const { t } = useTranslation('common');

  return (
    <button className={`taskBarItem ${styles.taskBarItem}`}
      type="button">
      <div className={`taskBarItem__image ${styles.taskBarItem__image}`}>
        <Image alt="placeholder" filename={image} />
      </div>
      <div className={`taskBarItem__label ${styles.taskBarItem__label}`}>
        {t(label)}
      </div>
    </button>
  );
};

TaskbarItem.propTypes = {
  image: PropTypes.string,
  label: PropTypes.string,
};

export default TaskbarItem;
