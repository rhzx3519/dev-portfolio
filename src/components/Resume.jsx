import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import { Container } from '@mui/material';
import Header from './Header';


function Resume(props) {
  // const theme = useContext(ThemeContext);
  const { header } = props;
  return (
    <>
      <Header title={header} />
      <Container maxWidth="lg">
        <Fade>
        </Fade>
      </Container>
    </>
  );
}

Resume.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Resume;
