import { IUserProps } from '../user'

export interface ILoginProps {
  setUser: React.Dispatch<React.SetStateAction<IUserProps>>
}