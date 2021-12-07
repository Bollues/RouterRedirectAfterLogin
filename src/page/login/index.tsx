import { useState } from "react";
import { LoginForm } from "../../component/loginForm";
import { RegistForm } from "../../component/registForm";
import { ILoginProps } from "../../model/login";
// import { useHistory } from "react-router";

export const Login= (props: ILoginProps) => {
  // const {setUser} = props
  // const history = useHistory()
  const [whichPage, setWhichPage] = useState(0)   // 0: login, 1: regist

  const switchPage = (id: number) => {
    setWhichPage(id)
  }

  // useEffect(() => {
  //   const user = localStorage.getItem('user')
  //   if (user) {
  //     setUser(JSON.parse(user))
  //     history.replace('/login')
  //   }
  // }, [])

  return (
    <div>
      {
        (whichPage === 0) ? <LoginForm {...props} switchPage={switchPage}/> : <RegistForm switchPage={switchPage}/>
      }
    </div>
  )
}