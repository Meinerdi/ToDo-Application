import React from 'react';
import { connect } from 'react-redux';
import {
  deleteMainTaskCreator,
  setSearchedTasksCreator,
  completeTaskCreator,
} from '../../redux/appReducer';
import { Tasks } from './Tasks';

const TasksContainer = (props) => {
  const {
    searchActivated,
    searchedTasks,
    deleteMainTaskCreator,
    tasks,
    completeTaskCreator,
  } = props;

  const onDeleteTask = (id) => {
    if (searchActivated) {
      setSearchedTasksCreator(searchedTasks.filter((i) => i.id !== id));
      deleteMainTaskCreator(tasks.filter((i) => i.id !== id));
    } else {
      deleteMainTaskCreator(tasks.filter((i) => i.id !== id));
    }
  };

  const onCompleteTask = (id) => {
    completeTaskCreator(
      tasks.map((i) => {
        if (i.id === id) {
          i.done = !i.done;
          return i;
        }
        return i;
      })
    );
  };

  return (
    <Tasks
      {...props}
      onDeleteTask={onDeleteTask}
      onCompleteTask={onCompleteTask}
    />
  );
};

const mapStateToProps = (state) => ({
  tasks: state.appReducer.tasks,
  searchActivated: state.appReducer.searchActivated,
  searchedTasks: state.appReducer.searchedTasks,
});

export default connect(mapStateToProps, {
  setSearchedTasksCreator,
  deleteMainTaskCreator,
  completeTaskCreator,
})(TasksContainer);
