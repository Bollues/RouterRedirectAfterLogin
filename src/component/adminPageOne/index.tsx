import { useContext } from 'react';
import { UserContext } from '../../App';
import './style.scss';

export default () => {
  const user = useContext(UserContext)

  return (
    <div className="admin-page1-container">
      userName--{user.userName}
      <br/>
      role--{user.role}
      <br/>
      page1
    </div>
  );
}