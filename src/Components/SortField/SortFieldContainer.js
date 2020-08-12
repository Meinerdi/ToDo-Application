import React from 'react';
import { connect } from 'react-redux';
import { SortField } from './SortField';
import { toggleSortByCreator } from '../../redux/appReducer';

const SortFieldContainer = (props) => {
  const { toggleSortByCreator, sortedByName, sortedByDate } = props;

  const onSortByName = (sorted) => {
    if (this.state.searchActivated) {
      this.setState((state) => {
        return {
          searchedTasks: state.searchedTasks
            .map((i) => i)
            .sort((a, b) => {
              if (sorted) {
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
            }),
        };
      });
    } else {
      this.setState((state) => {
        return {
          tasks: state.tasks
            .map((i) => i)
            .sort((a, b) => {
              if (sorted) {
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
            }),
        };
      });
    }
  };

  const onSortByDate = (sorted) => {
    if (this.state.searchActivated) {
      this.setState((state) => {
        return {
          searchedTasks: state.searchedTasks
            .map((i) => i)
            .sort((a, b) => {
              if (sorted) {
                if (a.date > b.date) {
                  return 1;
                } else {
                  return -1;
                }
              } else {
                if (a.date < b.date) {
                  return 1;
                } else return -1;
              }
            }),
        };
      });
    } else {
      this.setState((state) => {
        return {
          tasks: state.tasks
            .map((i) => i)
            .sort((a, b) => {
              if (sorted) {
                if (a.date > b.date) {
                  return 1;
                } else {
                  return -1;
                }
              } else {
                if (a.date < b.date) {
                  return 1;
                } else return -1;
              }
            }),
        };
      });
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
});

export default connect(mapDispatchToProps, { toggleSortByCreator })(
  SortFieldContainer
);
