import { useContext } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import * as routesConfig from './config';
import { IRoute, IRouteProps } from '../model/route';
import AllPages from '../page';
import { UserContext } from '../App';

export const Router = (props: IRouteProps) => {
  const { setUser } = props
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
      <Route key="0" path="/login">
        <AllPages.Login setUser={setUser}/>
      </Route>
      <Route key="1" path="/welcome">
        <AllPages.Welcome setUser={setUser}/>
      </Route>
      { routesConfig["routes"].routes.map(r => route(r)) }
      <Route render={() => <Redirect to="/404" />} />
    </Switch>
  )
} 