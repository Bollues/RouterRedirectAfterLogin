export interface IRoute {
  key: string,
  path: string,
  title?: string,
  page: string
}

export interface RouterProps {
  auth: boolean,
}