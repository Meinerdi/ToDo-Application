import React, { Component } from 'react';
import empty from '../../assets/empty.png';
import s from './TasksContainer.module.scss';

export class TasksContainer extends Component {
  handleDelete = (e) => {
    this.props.onDeleteTask(e.target.value);
  };

  handleComplete = (e) => {
    this.props.onCompleteTask(e.target.value);
  };

  render() {
    let { tasks, searchActivated, searchedTasks } = this.props;
    let data = searchActivated ? searchedTasks : tasks;

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
              onChange={this.handleComplete}
              value={i.id}
              className={s.checkbox}
            />
            <span className={s['task-name']}>{i.name}</span>
            <div className={s['right-holder']}>
              <span className={s.date}>{i.date}</span>
              <button
                value={i.id}
                onClick={this.handleDelete}
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
  }
}
