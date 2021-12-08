import { Route, Redirect, Switch } from 'react-router-dom';
import { Login } from '../page/login';
import { UserContext } from "../App";
import { useContext } from 'react';

export const AuthRouter = (props: any) => {
  const { setUser } = props
  const user = useContext(UserContext)

  return (
    <Switch>
      <Route path="/login" exact>
        <Login setUser={setUser} />
      </Route>
      <Route path="/" exact render={
        () => (user && user.role) ? 
        <Redirect to={`/${user.role}/page1`} push /> : 
        <Redirect to="/login" push />
      } />
      
      <Redirect to="/404" />
    </Switch>
  )
} 