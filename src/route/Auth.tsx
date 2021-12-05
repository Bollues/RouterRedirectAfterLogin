import { Route, Redirect, Switch } from 'react-router-dom';
import { Login } from '../page/login';
import { UserContext } from "../App";
import { useContext } from 'react';

export const AuthRouter = (props: any) => {
  const { setUser } = props
  const userName = useContext(UserContext)

  return (
    <Switch>
      <Route path="/login">
        <Login setUser={setUser}/>
      </Route>
      <Route path="/" exact render={
        () => userName ? 
        <Redirect to="/welcome" push /> : 
        <Redirect to="/login" push />
      } />
      
      <Redirect to="/404" />
    </Switch>
  )
} 