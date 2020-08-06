import React, {Component} from 'react'
import s from './../styles.module.scss'

export class Header extends Component {
    render() {
        let {tasksCount} = this.props

        return (
            <h1 className={s.titleName}>You have {tasksCount} tasks</h1>
        )
    }
}