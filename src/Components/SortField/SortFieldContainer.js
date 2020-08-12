import React from 'react';
import { connect } from 'react-redux';
import { SortField } from './SortField';
import {
  toggleSortByNameCreator,
  toggleSortByDateCreator,
  setSearchedTasksCreator,
  sortMainTasksCreator,
} from '../../redux/appReducer';

const SortFieldContainer = (props) => {
  const {
    toggleSortByNameCreator,
    toggleSortByDateCreator,
    sortedByName,
    sortedByDate,
    searchActivated,
    setSearchedTasksCreator,
    searchedTasks,
    tasks,
    sortMainTasksCreator,
  } = props;

  const onSortByName = () => {
    toggleSortByNameCreator(!sortedByName);

    if (searchActivated) {
      setSearchedTasksCreator(
        ...searchedTasks
          .map((i) => i)
          .sort((a, b) => {
            if (sortedByName) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              } else {
                return -1;
              }
            } else {
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return 1;
              } else return -1;
            }
          })
      );
    } else {
      sortMainTasksCreator(
        ...tasks
          .map((i) => i)
          .sort((a, b) => {
            if (sortedByName) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              } else {
                return -1;
              }
            } else {
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return 1;
              } else return -1;
            }
          })
      );
    }
  };

  const onSortByDate = () => {
    toggleSortByDateCreator(!sortedByDate);

    if (searchActivated) {
      setSearchedTasksCreator(
        ...searchedTasks
          .map((i) => i)
          .sort((a, b) => {
            if (sortedByDate) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              } else {
                return -1;
              }
            } else {
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return 1;
              } else return -1;
            }
          })
      );
    } else {
      sortMainTasksCreator(
        ...tasks
          .map((i) => i)
          .sort((a, b) => {
            if (sortedByDate) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              } else {
                return -1;
              }
            } else {
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return 1;
              } else return -1;
            }
          })
      );
    }
  };

  return (
    <SortField
      {...props}
      onSortByDate={onSortByDate}
      onSortByName={onSortByName}
    />
  );
};

const mapDispatchToProps = (state) => ({
  sortedByName: state.appReducer.sortedByName,
  sortedByDate: state.appReducer.sortedByDate,
  searchActivated: state.appReducer.searchActivated,
  searchedTasks: state.appReducer.searchedTasks,
  tasks: state.appReducer.tasks,
});

export default connect(mapDispatchToProps, {
  toggleSortByNameCreator,
  toggleSortByDateCreator,
  setSearchedTasksCreator,
  sortMainTasksCreator,
})(SortFieldContainer);
