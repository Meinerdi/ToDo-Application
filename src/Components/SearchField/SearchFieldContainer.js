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

  const onSearch = (searchText, searchDate) => {
    searchText || searchDate
      ? toggleSearchActivatedCreator(true)
      : toggleSearchActivatedCreator(false);

    let tmpTasks = [...tasks];

    setSearchedTasksCreator(
      tmpTasks.filter((i) =>
        searchText && searchDate
          ? i.name.includes(searchText) && i.date.includes(searchDate)
          : searchText
          ? i.name.includes(searchText)
          : i.date.includes(searchDate)
      )
    );
  };

  const changeFilterInactive = () => {
    toggleSearchActivatedCreator(false);
  };

  return (
    <SearchField
      {...props}
      onSearch={onSearch}
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
