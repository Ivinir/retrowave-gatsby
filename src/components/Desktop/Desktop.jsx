import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Desktop.module.scss';
import DesktopIcon from './DesktopIcon/DesktopIcon.jsx';
import iconList from '../../data/iconList';

const Desktop = () => (
  <div className={`desktop ${styles.desktop}`}>
    <DesktopIconList />
  </div>
);

const getDesktopIconList = () => {
  const { i18n } = useTranslation('common');
  return (iconList(i18n.language));
};

const DesktopIconList = () => {
  const desktopIconList = getDesktopIconList();
  const render = [];

  if (desktopIconList) {
    desktopIconList.map((value, index) => render.push(
      <DesktopIcon
        key={index}
        image={value.image}
        label={value.label}
        value={value.value}
      />,
    ));
  }

  return (
    <div>
      {render}
    </div>
  );
};

export default Desktop;
