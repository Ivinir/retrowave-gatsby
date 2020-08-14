import React from 'react';
import { useTranslation } from 'react-i18next';
import iconList from '../../../data/iconList';
import TaskbarItem from './TaskbarItem/TaskbarItem.jsx';
import styles from './TaskbarItems.module.scss';

const getTaskbarIconList = () => {
  const { i18n } = useTranslation('common');
  return (iconList(i18n.language));
};

const TaskbarItems = (props) => {
  const render = [];
  const taskbarIconList = getTaskbarIconList();

  if (taskbarIconList) {
    taskbarIconList.map((value, index) => {
      render.push(
        <TaskbarItem
          key={index}
          image={value.image}
          label={value.label}
          value={value.value}
        />,
      );
    });
  }

  return (
    <div className={`taskbarItems ${styles.taskbarItems}`}>
      {render}
    </div>
  );
};

export default TaskbarItems;
