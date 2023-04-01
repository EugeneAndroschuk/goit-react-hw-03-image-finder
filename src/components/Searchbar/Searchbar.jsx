import React from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { IoSearch } from 'react-icons/io5';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Searchbar extends React.Component {
  state = {
    querySearch: '',
  };

  onFormSubmit = e => {
    e.preventDefault();
    const normalizedQuerySearch = this.state.querySearch.trim();

    if (normalizedQuerySearch)
      this.props.querySearchInSearchbar(normalizedQuerySearch);
    else NotificationManager.warning('Please, enter correct query search');
  };

  handleInputChange = e => {
    this.setState({ querySearch: e.currentTarget.value });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.onFormSubmit}>
          <button type="submit" className={css['SearchForm-button']}>
            <IoSearch size={20} />
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
        <NotificationContainer />
      </header>
    );
  }
}

Searchbar.propTypes = {
  querySearchInSearchbar: PropTypes.func.isRequired,
};

export default Searchbar;
