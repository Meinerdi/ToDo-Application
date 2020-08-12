import React, { useState, useEffect } from 'react';
import s from './AddTaskField.module.scss';

export const AddTaskField = ({ emptyFields, onAddTask }) => {
  const [valueOfTaskNameField, setValueOfTaskNameField] = useState('');
  const [valueOfDateField, setValueOfDateField] = useState('');

  useEffect(() => {
    setValueOfTaskNameField(localStorage.getItem('valueOfAddTaskName'));
    setValueOfDateField(localStorage.getItem('valueOfAddTaskDate'));
  }, []);

  const handleTaskNameChange = (e) => {
    setValueOfTaskNameField(e.target.value);
    localStorage.setItem('valueOfAddTaskName', e.target.value);
  };

  const handleDateChange = (e) => {
    setValueOfDateField(e.target.value);
    localStorage.setItem('valueOfAddTaskDate', e.target.value);
  };

  const handleSubmitTask = (e) => {
    e.preventDefault();
    onAddTask(valueOfTaskNameField, valueOfDateField);

    if (valueOfTaskNameField && valueOfDateField) {
      setValueOfTaskNameField('');
      setValueOfDateField('');

      localStorage.setItem('valueOfAddTaskName', '');
      localStorage.setItem('valueOfAddTaskDate', '');
    }
  };

  return (
    <form className={s['add-task-form']}>
      <input
        type="search"
        value={valueOfTaskNameField}
        onChange={handleTaskNameChange}
        className={emptyFields.taskName ? s.error : ''}
        placeholder="&#9989; Write task name..."
      />
      <input
        type="date"
        value={valueOfDateField}
        onChange={handleDateChange}
        className={emptyFields.taskDate ? s.error : ''}
      />
      <input type="submit" value={'ADD TASK'} onClick={handleSubmitTask} />
    </form>
  );
};
