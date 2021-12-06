import { useEffect, useState } from "react";
import { LoginForm } from "../../component/loginForm";
import { RegistForm } from "../../component/registForm";
import { ILoginProps } from "../../model/login";
import { useHistory } from "react-router";

export const Login= (props: ILoginProps) => {
  const history = useHistory()
  const [whichPage, setWhichPage] = useState(0)   // 0: login, 1: regist

  const switchPage = (id: number) => {
    setWhichPage(id)
  }

  useEffect(() => {
    const user = localStorage.getItem('username')
    if (user) history.replace('/welcome')
  }, [])

  return (
    <div>
      {
        (whichPage === 0) ? <LoginForm {...props} switchPage={switchPage}/> : <RegistForm switchPage={switchPage}/>
      }
    </div>
  )
}