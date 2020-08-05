import React, {Component} from 'react'

export class Header extends Component {
    render() {
        let {tasksCount} = this.props

        return (
            <h1>Tou have {tasksCount} tasks</h1>
        )
    }
}