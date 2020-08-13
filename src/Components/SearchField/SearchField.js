import React, { useState, useEffect } from 'react';
import s from './SearchField.module.scss';

export const SearchField = ({ onSearch, changeFilterInactive }) => {
  const [valueOfSearchTextField, setValueOfSearchTextField] = useState('');
  const [valueOfSearchDateField, setvalueOfSearchDateField] = useState('');

  useEffect(() => {
    setValueOfSearchTextField(localStorage.getItem('valueOfSearchText'));
    setvalueOfSearchDateField(localStorage.getItem('valueOfSearchDate'));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearchText = (e) => {
    setValueOfSearchTextField(e.target.value);
    onSearch(e.target.value, valueOfSearchDateField);
    localStorage.setItem('valueOfSearchText', e.target.value);
  };

  const handleSearchDate = (e) => {
    setvalueOfSearchDateField(e.target.value);
    onSearch(valueOfSearchTextField, e.target.value);
    localStorage.setItem('valueOfSearchDate', e.target.value);
  };

  const handleReset = () => {
    setValueOfSearchTextField('');
    setvalueOfSearchDateField('');
    localStorage.setItem('valueOfSearchText', '');
    localStorage.setItem('valueOfSearchDate', '');
    changeFilterInactive();
  };

  return (
    <form onSubmit={handleSubmit} className={s['search-form']}>
      <input
        type="search"
        onChange={handleSearchText}
        placeholder="&#128270; Search here..."
        value={valueOfSearchTextField}
      />

      <input
        type="date"
        onChange={handleSearchDate}
        value={valueOfSearchDateField}
      />

      <input type="submit" value="RESET FILTERS" onClick={handleReset} />
    </form>
  );
};
