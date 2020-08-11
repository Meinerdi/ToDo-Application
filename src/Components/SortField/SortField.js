import React, { Component } from 'react';
import s from './SortField.module.scss';

export class SortField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortedByName: false,
      sortedByDate: false,
    };
  }

  handleSortByName = () => {
    this.setState((state) => ({
      sortedByName: !state.sortedByName,
    }));
    this.props.onSortByName(this.state.sortedByName);
  };

  onSortByDate = () => {
    this.setState((state) => ({
      sortedByDate: !state.sortedByDate,
    }));
    this.props.onSortByDate(this.state.sortedByDate);
  };

  render() {
    return (
      <div className={s['sort-field']}>
        <span>Sort by:</span>
        <span onClick={this.handleSortByName} className={s['sort-buttons']}>
          Name
        </span>
        <span onClick={this.onSortByDate} className={s['sort-buttons']}>
          Date
        </span>
      </div>
    );
  }
}
