import React, { Component } from 'react';
import AddTaskFieldContainer from './Components/AddTaskField/AddTaskFieldContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import SearchFieldContainer from './Components/SearchField/SearchFieldContainer';
import SortFieldContainer from './Components/SortField/SortFieldContainer';
import TasksContainer from './Components/Tasks/TasksContainer';
import { setAllDataCreator } from './redux/appReducer';
import { connect } from 'react-redux';
import s from './global.module.scss';

class App extends Component {
  componentDidMount() {
    let oldState = JSON.parse(localStorage.getItem('state'));
    this.props.setAllDataCreator({ ...oldState });
  }

  componentDidUpdate() {
    localStorage.setItem('state', JSON.stringify({ ...this.props.state }));
  }

  render() {
    return (
      <div className={s['app-wrapper']}>
        <HeaderContainer />
        <AddTaskFieldContainer />
        <SearchFieldContainer />
        <SortFieldContainer />
        <TasksContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state.appReducer,
});

export default connect(mapStateToProps, { setAllDataCreator })(App);
