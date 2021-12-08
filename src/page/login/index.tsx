import { useState } from "react";
import { LoginForm } from "../../component/loginForm";
import { RegistForm } from "../../component/registForm";
import { ILoginProps } from "../../model/login";

export const Login= (props: ILoginProps) => {
  const [whichPage, setWhichPage] = useState(0)   // 0: login, 1: regist

  const switchPage = (id: number) => {
    setWhichPage(id)
  }

  return (
    <div>
      {
        (whichPage === 0) ? <LoginForm {...props} switchPage={switchPage}/> : <RegistForm switchPage={switchPage}/>
      }
    </div>
  )
}