import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { App } from './App';
import { setAllDataCreator } from './redux/appReducer';

const AppContainer = ({ state, setAllDataCreator }) => {
  useEffect(() => {
    let oldState = JSON.parse(localStorage.getItem('state'));
    setAllDataCreator({ ...oldState });
  }, [setAllDataCreator]);

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify({ ...state }));
  }, [state]);

  return <App />;
};

const mapStateToProps = (state) => ({
  state: state.appReducer,
});

export default connect(mapStateToProps, { setAllDataCreator })(AppContainer);
