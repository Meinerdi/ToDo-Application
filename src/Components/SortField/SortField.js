import React from 'react';
import s from './SortField.module.scss';

export const SortField = ({ onSortByName, onSortByDate }) => {
  const handleSortByName = () => {
    this.setState((state) => ({
      sortedByName: !state.sortedByName,
    }));
    onSortByName(this.state.sortedByName);
  };

  const handleSortByDate = () => {
    this.setState((state) => ({
      sortedByDate: !state.sortedByDate,
    }));
    onSortByDate(this.state.sortedByDate);
  };

  return (
    <div className={s['sort-field']}>
      <span>Sort by:</span>
      <span onClick={handleSortByName} className={s['sort-buttons']}>
        Name
      </span>
      <span onClick={handleSortByDate} className={s['sort-buttons']}>
        Date
      </span>
    </div>
  );
};
