import React from 'react';

import { Route, Redirect } from 'react-router-dom';

//Spread operator
function PrivateRoute (...rest) {
  const isSignedIn = true;
  
  if (!isSignedIn) {
    return <Redirect to="/" />;
  }
  
  return(<Route {...rest} />);
}

export default PrivateRoute;
