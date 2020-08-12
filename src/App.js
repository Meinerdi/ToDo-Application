import React, { Component } from 'react';
import AddTaskFieldContainer from './Components/AddTaskField/AddTaskFieldContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import SearchFieldContainer from './Components/SearchField/SearchFieldContainer';
import SortFieldContainer from './Components/SortField/SortFieldContainer';
import { TasksContainer } from './Components/TasksContainer/TasksContainer';
import s from './global.module.scss';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      emptyFields: {
        taskName: false,
        taskDate: false,
      },
      searchActivated: false,
      searchedTasks: [],
    };
  }

  componentDidMount() {
    let oldState = JSON.parse(localStorage.getItem('state'));
    this.setState({ ...this.state, ...oldState });
  }

  componentDidUpdate() {
    localStorage.setItem('state', JSON.stringify({ ...this.state }));
  }

  onDeleteTask = (id) => {
    if (this.state.searchActivated) {
      this.setState((state) => ({
        searchedTasks: state.searchedTasks.filter((i) => i.id !== id),
        tasks: state.tasks.filter((i) => i.id !== id),
      }));
    } else {
      this.setState((state) => ({
        tasks: state.tasks.filter((i) => i.id !== id),
      }));
    }
  };

  onCompleteTask = (id) => {
    this.setState((state) => {
      return {
        tasks: state.tasks.map((i) => {
          if (i.id === id) {
            i.done = !i.done;
            return i;
          }
          return i;
        }),
      };
    });
  };

  render() {
    let { tasks, searchedTasks, searchActivated } = this.state;

    return (
      <div className={s['app-wrapper']}>
        <HeaderContainer />
        <AddTaskFieldContainer />
        <SearchFieldContainer />
        <SortFieldContainer />
        <TasksContainer
          tasks={tasks}
          searchedTasks={searchedTasks}
          searchActivated={searchActivated}
          onDeleteTask={this.onDeleteTask}
          onCompleteTask={this.onCompleteTask}
        />
      </div>
    );
  }
}
