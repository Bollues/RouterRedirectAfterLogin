import { useHistory } from 'react-router';
import './loginForm.scss';

export const LoginForm = () => {
  const history = useHistory()
  const handleLogin = () => {
    history.push('/welcome')
  }
  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleLogin}>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}