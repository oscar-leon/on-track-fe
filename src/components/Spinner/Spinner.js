import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

import './Spinner.scss';

const Loader = () => {
  return (
    <div className="spinner-container">
      <Spinner animation="border" role="status" variant="primary">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
