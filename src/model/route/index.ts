
export interface IRoute {
  key: string,
  path: string,
  name?: string,
  icon?: any,
  component: string
}

export interface IRouteProps {
  setUser: React.Dispatch<React.SetStateAction<string>>
}