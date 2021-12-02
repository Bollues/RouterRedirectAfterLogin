import { useHistory } from 'react-router';
import './loginForm.scss';

export const LoginForm = (props: any) => {
  const { setUser } = props
  const history = useHistory()

  const handleLogin = (e: any) => {
    e.preventDefault()
    const username = 'aaa'
    setUser(username)
    localStorage.setItem('username', username)
    history.push('/welcome')
  }
  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={e => handleLogin(e)}>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}