/**
 * unUsed
 */

import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../App';

export function PrivateRoute(props: any) {
  const { children, ...rest } = props
  let auth = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}