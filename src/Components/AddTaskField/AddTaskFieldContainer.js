import React from 'react';
import { connect } from 'react-redux';
import { AddTaskField } from './AddTaskField';
import {
  addTaskCreator,
  toggleEmptyFieldsCreator,
} from '../../redux/appReducer';
import { generateUniqueId } from '../../helpers/generateUniqueId';

const AddTaskFieldContainer = (props) => {
  const { toggleEmptyFieldsCreator, addTaskCreator } = props;

  const onAddTask = (taskName, taskDate) => {
    if (!taskName || !taskDate) {
      toggleEmptyFieldsCreator({
        taskName: !taskName,
        taskDate: !taskDate,
      });
      return;
    }

    const templateOfTask = {
      id: generateUniqueId(),
      name: taskName,
      done: false,
      date: taskDate,
    };

    addTaskCreator(templateOfTask);
    toggleEmptyFieldsCreator({
      taskName: !taskName,
      taskDate: !taskDate,
    });
  };

  return <AddTaskField {...props} onAddTask={onAddTask} />;
};

const mapStateToProps = (state) => ({
  emptyFields: state.appReducer.emptyFields,
});

export default connect(mapStateToProps, {
  addTaskCreator,
  toggleEmptyFieldsCreator,
})(AddTaskFieldContainer);
