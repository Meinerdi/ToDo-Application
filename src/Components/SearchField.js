import React, {Component} from 'react'

export class SearchField extends Component {
    constructor(props) {
        super(props)

        this.state = {
            valueSearchField: "",
            valueDateField: ""
        }
    }

    handleSubmit = e => {
        e.preventDefault()
    }

    handleSearchText = e => {
        this.setState({
            valueSearchField: e.target.value
        })
    }

    handleSearchDate = e => {
        this.setState({
            valueDateField: e.target.value
        })
    }

    render() {
        let {valueSearchField, valueDateField} = this.state
        
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="search" 
                    value={valueSearchField} 
                    onChange={this.handleSearchText}
                    placeholder="Search here..."
                />
                <input 
                    type="date" 
                    value={valueDateField} 
                    onChange={this.handleSearchDate}
                />
            </form>
        )
    }
}