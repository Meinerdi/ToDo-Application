import React, {Component} from 'react'

export class SearchField extends Component {
    constructor(props) {
        super(props)

        this.state = {
            valueOfSearchTextField: "",
            valueOfSearchDateField: ""
        }
    }

    componentDidMount() {
        this.setState({
            valueOfSearchTextField: localStorage.getItem("valueOfSearchText"),
            valueOfSearchDateField: localStorage.getItem("valueOfSearchDate")
        })
    }

    handleSubmit = e => {
        e.preventDefault()
    }

    handleSearchText = e => {
        this.setState({
            valueOfSearchTextField: e.target.value
        })

        this.props.onSearchByText(e.target.value)
        localStorage.setItem("valueOfSearchText", e.target.value)
    }

    handleSearchDate = e => {
        this.setState({
            valueOfSearchDateField: e.target.value
        })

        this.props.onSearchByDate(e.target.value)
        localStorage.setItem("valueOfSearchDate", e.target.value)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <input 
                    type="search" 
                    onChange={this.handleSearchText}
                    placeholder="Search here..."
                    value={this.state.valueOfSearchTextField}
                />
                
                <input 
                    type="date" 
                    onChange={this.handleSearchDate}
                    value={this.state.valueOfSearchDateField}
                />

            </form>
        )
    }
}