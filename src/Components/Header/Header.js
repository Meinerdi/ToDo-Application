import React from 'react';
import s from './Header.module.scss';

export const Header = ({ countOfTasks }) => {
  return <h1 className={s['title-name']}>You have {countOfTasks} tasks</h1>;
};
