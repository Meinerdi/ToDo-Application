import React, { Component } from 'react';
import s from './Header.module.scss';

export class Header extends Component {
  render() {
    let { tasksCount } = this.props;

    return <h1 className={s['title-name']}>You have {tasksCount} tasks</h1>;
  }
}
