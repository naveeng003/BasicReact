import React from 'react';
import PropTypes from 'prop-types';
import styles from './SectionHeader.module.css';

const SectionHeader = props => {
  return (
    <h4 className="mb-3">{props.title}</h4>
  );
};

SectionHeader.defaultProps = {
  'title': 'No Title',
};

SectionHeader.propTypes = {
  'title': PropTypes.string.isRequired,
};

export default SectionHeader;
