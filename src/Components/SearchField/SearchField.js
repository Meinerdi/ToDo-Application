import React, { Component } from 'react';
import s from './SearchField.module.scss';

export class SearchField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valueOfSearchTextField: '',
      valueOfSearchDateField: '',
    };
  }

  componentDidMount() {
    this.setState({
      valueOfSearchTextField: localStorage.getItem('valueOfSearchText'),
      valueOfSearchDateField: localStorage.getItem('valueOfSearchDate'),
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleSearchText = (e) => {
    this.setState({
      valueOfSearchTextField: e.target.value,
    });

    this.props.onSearchByText(e.target.value);
    localStorage.setItem('valueOfSearchText', e.target.value);
  };

  handleSearchDate = (e) => {
    this.setState({
      valueOfSearchDateField: e.target.value,
    });

    this.props.onSearchByDate(e.target.value);
    localStorage.setItem('valueOfSearchDate', e.target.value);
  };

  handleReset = () => {
    this.setState({
      valueOfSearchTextField: '',
      valueOfSearchDateField: '',
    });
    localStorage.setItem('valueOfSearchText', '');
    localStorage.setItem('valueOfSearchDate', '');
    this.props.changeFilterInactive();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s['search-form']}>
        <input
          type="search"
          onChange={this.handleSearchText}
          placeholder="&#128270; Search here..."
          value={this.state.valueOfSearchTextField}
        />

        <input
          type="date"
          onChange={this.handleSearchDate}
          value={this.state.valueOfSearchDateField}
        />

        <input type="submit" value="RESET FILTERS" onClick={this.handleReset} />
      </form>
    );
  }
}
