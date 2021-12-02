import { Route, Redirect, Switch } from 'react-router-dom';
import * as routesConfig from './config';
import { IRoute, RouterProps } from '../model/route';
import AllPages from '../page';
import { Login } from '../page/login';

export const Router = (props: RouterProps) => {
  const { auth } = props

  const route = (r:IRoute)=>{
    const Component = AllPages[r.page]
    return (
      <Route
        key={r.key}
        path={r.path}
        exact
        component={Component}
        // render={ () => auth ? <Component /> : <Redirect to={'/login'} /> }
      />
    )
  }

  return (
    <Switch>
      { routesConfig["routes"].routes.map(r => route(r)) }
      <Route component={Login}/>
      <Route render={() => <Redirect to="/404" />} />
    </Switch>
  )
} 