import { useContext } from 'react';
import { UserContext } from '../../App';
import './style.scss';

export default () => {
  const user = useContext(UserContext)
  
  return (
    <div className="general-pageTwo-container">
      userName--{user.userName}
      <br/>
      role--{user.role}
      <br/>
      page2
    </div>
  );
}