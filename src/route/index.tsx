import { useContext } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { IRoute } from '../model/route';
import AllPages from '../page';
import { UserContext } from '../App';

export const Router = (roleRoutesConfig: any) => {
  const { config } = roleRoutesConfig

  const userName = useContext(UserContext)

  const checkLogin = () => {
    return userName || localStorage.getItem('username')
  }

  const route = (r:IRoute)=>{
    const Component = AllPages[r.component]
    return (
      <Route
        key={r.key}
        path={r.path}
        exact
        render={ () => checkLogin() ? <Component /> : <Redirect to={'/login'} /> }
      />
    )
  }

  return (
    <Switch>
      { config.map((r: any) => route(r)) }
      <Redirect to="/404" />
    </Switch>
  )
} 