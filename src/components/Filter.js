import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

class Filter extends Component {
  render() {
    return (
      <div>
        <h3 className="filter__header">Find contacts by name :</h3>
        <input
          type="text"
          name="filter"
          value={this.props.value}
          onChange={this.props.onChange}
          className="filter__input"
        />
      </div>
    );
  }
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
