import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './StartMenuRight.module.scss';
import iconList from '../../../../data/iconList';
import StartMenuItem from '../StartMenuItem/StartMenuItem.jsx';

const StartMenuRight = () => {
  return (
    <div className={`startMenuRight ${styles.startMenuRight}`}>
      <MenuItemList />
    </div>
  );
};

const MenuItemList = (props) => {
  const getMenuItemList = () => {
    const { i18n } = useTranslation('common');
    return (iconList(i18n.language));
  };

  const menuItemList = getMenuItemList();
  const render = [];

  if (menuItemList) {
    menuItemList.map((value, index) => render.push(
      <StartMenuItem
        key={index}
        image={value.image}
        label={value.label}
        value={value.value}
        action={value.action}
      />,
    ));
  }

  return (
    <div>
      {render}
    </div>
  );
};

export default StartMenuRight;