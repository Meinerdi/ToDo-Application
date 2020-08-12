import React from 'react';
import { connect } from 'react-redux';
import { Header } from './Header';

const HeaderContainer = (props) => {
  return <Header {...props} />;
};

const mapStateToProps = (state) => {
  return {
    countOfTasks: state.appReducer.tasks.length,
  };
};

export default connect(mapStateToProps)(HeaderContainer);
