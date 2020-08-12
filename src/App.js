import React, { Component } from 'react';
import AddTaskFieldContainer from './Components/AddTaskField/AddTaskFieldContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import { SearchField } from './Components/SearchField/SearchField';
import { SortField } from './Components/SortField/SortField';
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

  onSortByName = (sorted) => {
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

  onSortByDate = (sorted) => {
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

  onSearchByText = (searchText) => {
    if (searchText) {
      this.setState({
        searchActivated: true,
      });
    } else {
      this.setState({
        searchActivated: false,
      });
    }

    let tmpTasks = [...this.state.tasks];

    this.setState({
      searchedTasks: tmpTasks.filter((i) => i.name.includes(searchText)),
    });
  };

  onSearchByDate = (searchDate) => {
    if (searchDate) {
      this.setState({
        searchActivated: true,
      });
    } else {
      this.setState({
        searchActivated: false,
      });
    }

    let tmpTasks = [...this.state.tasks];

    this.setState({
      searchedTasks: tmpTasks.filter((i) => i.date.includes(searchDate)),
    });
  };

  changeFilterInactive = () => {
    this.setState({
      searchActivated: false,
    });
  };

  render() {
    let { tasks, searchedTasks, searchActivated } = this.state;

    return (
      <div className={s['app-wrapper']}>
        <HeaderContainer />
        <AddTaskFieldContainer />
        <SearchField
          onSearchByText={this.onSearchByText}
          onSearchByDate={this.onSearchByDate}
          changeFilterInactive={this.changeFilterInactive}
        />
        <SortField
          onSortByName={this.onSortByName}
          onSortByDate={this.onSortByDate}
        />
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
