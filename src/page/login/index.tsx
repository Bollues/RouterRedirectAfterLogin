import { LoginForm } from "../../component/loginForm";
import { ILoginProps } from "../../model/login";


export const Login= (props: ILoginProps) => {

  return (
    <LoginForm {...props}/>
  )
}