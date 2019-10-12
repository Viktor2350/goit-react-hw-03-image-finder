import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';

export default class SearchForm extends React.Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <form className={styles.search_form} onSubmit={this.handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Search images..."
          value={query}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
