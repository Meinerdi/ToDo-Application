import React, {Component} from 'react';
import {AddTaskField} from './Components/AddTaskField'
import {Header} from './Components/Header';
import {TasksContainer} from './Components/TasksContainer'
import {SortField} from './Components/SortField'
import { SearchField } from './Components/SearchField';
import './styles.module.scss'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: [
        {id: "asfasfasf", name: "Do something", done: false, date: "2020-13-01"},
        {id: "asf23f", name: "Read something", done: true, date: "2050-30-01"},
        {id: "f3f34fs", name: "Go for a walk", done: false, date: "1986-31-11"},
        {id: "f3f3sd4fs", name: "AAAAAA", done: false, date: "2007-01-11"},
      ],
      emptyFields: {
        taskName: false,
        taskDate: false
      },
      searchActivated: false,
      searchedTasks: []
    }
  }

  generateUniqueId = () => {
    return '_' + Math.random().toString(36).substr(2, 9)
  } 

  onAddTask = (taskName, taskDate) => {
    if (!taskName || !taskDate) {
      this.setState({
        emptyFields: {
          taskName: !taskName,
          taskDate: !taskDate
        }
      })
      return
    }

    let templateOfTask = {
      id: this.generateUniqueId(),
      name: taskName,
      done: false,
      date: taskDate
    }
    
    this.setState(state => ({
      tasks: [...state.tasks, templateOfTask],
      emptyFields: {
        taskName: !taskName,
        taskDate: !taskDate
      }
    }))
  }

  onDeleteTask = (id) => {
    if (this.state.searchActivated) {
      this.setState(state => ({
        searchedTasks: state.searchedTasks.filter(i => i.id !== id)
      }))
    } else {
      this.setState(state => ({
        tasks: state.tasks.filter(i => i.id !== id)
    }))
    }
  }

  onCompleteTask = (id) => {
    this.setState(state => ({
      tasks: state.tasks.map(i => {
        if (i.id === id) {
          i.done = !i.done
          return i
        }
        return i
      })
    }))
  }

  onSortByName = (sorted) => {
    if (this.state.searchActivated) {
      this.setState(state => {
        return {
          searchedTasks: state.searchedTasks.map(i => i).sort( (a, b) => {
            if (sorted) {
              if(a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1
              } else {
                return -1
              }
            } else {
              if(a.name.toLowerCase() < b.name.toLowerCase()) {
                return 1
              } else return -1
            }
          })
        }
      })
    } else {
      this.setState(state => {
        return {
          tasks: state.tasks.map(i => i).sort( (a, b) => {
            if (sorted) {
              if(a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1
              } else {
                return -1
              }
            } else {
              if(a.name.toLowerCase() < b.name.toLowerCase()) {
                return 1
              } else return -1
            }
          })
        }
      })
    }
  }

  onSortByDate = (sorted) => {
    if(this.state.searchActivated) {
      this.setState(state => {
        return {
          searchedTasks: state.searchedTasks.map(i => i).sort( (a, b) => {
            if (sorted) {
              if(a.date > b.date) {
                return 1
              } else {
                return -1
              }
            } else {
              if(a.date < b.date) {
                return 1
              } else return -1
            }
          })
        }
      })
    } else {
      this.setState(state => {
        return {
          tasks: state.tasks.map(i => i).sort( (a, b) => {
            if (sorted) {
              if(a.date > b.date) {
                return 1
              } else {
                return -1
              }
            } else {
              if(a.date < b.date) {
                return 1
              } else return -1
            }
          })
        }
      })
    }
  }
  
  onSearchByText = (searchText) => {
    if (searchText) {
      this.setState({
        searchActivated: true
      }) 
    } else {
      this.setState({
        searchActivated: false
      }) 
    }

    let tmpTasks = [...this.state.tasks]

    this.setState({
      searchedTasks: tmpTasks.filter(i => i.name.includes(searchText))
    })
  }

  onSearchByDate = (searchDate) => {
    if (searchDate) {
      this.setState({
        searchActivated: true
      }) 
    } else {
      this.setState({
        searchActivated: false
      }) 
    }

    let tmpTasks = [...this.state.tasks]

    this.setState({
      searchedTasks: tmpTasks.filter(i => i.date.includes(searchDate))
    })
  }

  render() {
    let {tasks, emptyFields, searchedTasks, searchActivated} = this.state

    return (
      <div>
        <Header tasksCount={tasks.length}/>
        <AddTaskField 
          onAddTask={this.onAddTask} 
          emptyFields={emptyFields}
        />
        <SearchField
          onSearchByText={this.onSearchByText}
          onSearchByDate={this.onSearchByDate}
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
    )
  }
}
