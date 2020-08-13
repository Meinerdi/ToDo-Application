import React from 'react';
import AddTaskFieldContainer from './Components/AddTaskField/AddTaskFieldContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import SearchFieldContainer from './Components/SearchField/SearchFieldContainer';
import SortFieldContainer from './Components/SortField/SortFieldContainer';
import TasksContainer from './Components/Tasks/TasksContainer';
import s from './global.module.scss';

export const App = () => (
  <div className={s['app-wrapper']}>
    <HeaderContainer />
    <AddTaskFieldContainer />
    <SearchFieldContainer />
    <SortFieldContainer />
    <TasksContainer />
  </div>
);
