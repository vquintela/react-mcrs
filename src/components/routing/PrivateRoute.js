import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import userContext from '../../context/user/userContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useContext(userContext);
  
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to='/signin' />
        )
      }
    />
  );
};

export default PrivateRoute;