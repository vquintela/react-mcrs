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
          <Redirect to='/' />
            ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;