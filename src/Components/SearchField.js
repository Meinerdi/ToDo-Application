import React, {Component} from 'react'

export class SearchField extends Component {
    handleSubmit = e => {
        e.preventDefault()
    }

    handleSearchText = e => {
        this.props.onSearchByText(e.target.value)
    }

    handleSearchDate = e => {
        this.props.onSearchByDate(e.target.value)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <input 
                    type="search" 
                    onChange={this.handleSearchText}
                    placeholder="Search here..."
                />
                
                <input 
                    type="date" 
                    onChange={this.handleSearchDate}
                />

            </form>
        )
    }
}