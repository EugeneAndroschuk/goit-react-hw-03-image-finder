import React, { Component } from 'react';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
      querySearch: '',
  };

    onFormSubmit = (e) => {
      e.preventDefault();
      this.props.querySearchInSearchbar(this.state.querySearch);
  };

  handleInputChange = e => {
    this.setState({ querySearch: e.currentTarget.value });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.onFormSubmit}>
          <button type="submit" className={css['SearchForm-button']}>
            <span className={css['SearchForm-button-label']}>Search</span>
          </button>

          <input
            className={css['SearchForm-input']}
            value={this.state.querySearch}
            onChange={this.handleInputChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
