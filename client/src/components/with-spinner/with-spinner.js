import React from 'react';
import Spinner from '../spinner/spinner';

const WithSpinner = WrappedComponent => ({ isLoading, ...rest }) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...rest} />;
};

export default WithSpinner;
