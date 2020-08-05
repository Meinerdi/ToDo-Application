import React, {Component} from 'react'

export class SortField extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sortedByName: false,
            sortedByDate: false
        }
    }

    handleSortByName = () => {
        this.setState(state => ({
            sortedByName: !state.sortedByName
        }))
        this.props.onSortByName(this.state.sortedByName)
    }

    onSortByDate = () => {
        this.setState(state => ({
            sortedByDate: !state.sortedByDate
        }))
        this.props.onSortByDate(this.state.sortedByDate)
    }

    render() {
        return (
            <div>
                <span>Sort by:</span>
                <span onClick={this.handleSortByName}>Name</span>
                <span onClick={this.onSortByDate}>Date</span>
            </div>
        )
    }
}