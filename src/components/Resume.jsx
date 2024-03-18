import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

function Resume(props) {
  const { header } = props;
  return (
    <>
      <Header title={header} />
    </>
  );
}

Resume.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Resume;
