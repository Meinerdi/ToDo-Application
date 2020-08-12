import React from 'react';
import { SearchField } from './SearchField';
import { connect } from 'react-redux';
import {
  toggleSearchActivatedCreator,
  setSearchedTasksCreator,
} from '../../redux/appReducer';

const SearchFieldContainer = (props) => {
  const {
    toggleSearchActivatedCreator,
    tasks,
    setSearchedTasksCreator,
  } = props;

  const onSearchByText = (searchText) => {
    searchText
      ? toggleSearchActivatedCreator(true)
      : toggleSearchActivatedCreator(false);
    let tmpTasks = [...tasks];
    setSearchedTasksCreator(
      tmpTasks.filter((i) => i.name.includes(searchText))
    );
  };

  const onSearchByDate = (searchDate) => {
    searchDate
      ? toggleSearchActivatedCreator(true)
      : toggleSearchActivatedCreator(false);
    let tmpTasks = [...tasks];
    setSearchedTasksCreator(
      tmpTasks.filter((i) => i.date.includes(searchDate))
    );
  };

  const changeFilterInactive = () => {
    toggleSearchActivatedCreator(false);
  };

  return (
    <SearchField
      {...props}
      onSearchByText={onSearchByText}
      onSearchByDate={onSearchByDate}
      changeFilterInactive={changeFilterInactive}
    />
  );
};

const mapStateToProps = (state) => ({
  tasks: state.appReducer.tasks,
});

export default connect(mapStateToProps, {
  toggleSearchActivatedCreator,
  setSearchedTasksCreator,
})(SearchFieldContainer);
