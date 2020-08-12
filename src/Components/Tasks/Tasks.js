import React from 'react';
import empty from '../../assets/empty.png';
import s from './Tasks.module.scss';

export const Tasks = ({
  onDeleteTask,
  onCompleteTask,
  tasks,
  searchActivated,
  searchedTasks,
}) => {
  let data = searchActivated ? searchedTasks : tasks;

  const handleDelete = (e) => {
    onDeleteTask(e.target.value);
  };

  const handleComplete = (e) => {
    onCompleteTask(e.target.value);
  };

  return (
    <ol className={s['tasks-container']}>
      {data.map((i) => (
        <li
          key={i.id}
          className={`${s['task-holder']} ${i.done ? s.completed : ''}`}
        >
          <input
            type="checkbox"
            checked={i.done}
            onChange={handleComplete}
            value={i.id}
            className={s.checkbox}
          />
          <span className={s['task-name']}>{i.name}</span>
          <div className={s['right-holder']}>
            <span className={s.date}>{i.date}</span>
            <button
              value={i.id}
              onClick={handleDelete}
              className={s['delete-button']}
            >
              Delete
            </button>
          </div>
        </li>
      ))}

      {!data.length && (
        <img src={empty} alt="No Tasks" className={s['empty-image']} />
      )}
    </ol>
  );
};
