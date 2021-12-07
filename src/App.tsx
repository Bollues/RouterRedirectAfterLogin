import { createContext, useState, useEffect } from "react";
import Layout from './component/proLayout';
import { Login } from "./page/login";
import { AuthRouter } from "./route/Auth";
import { IUserProps } from "./model/user";

const userInfo: IUserProps = {userId: 0, userName: '', role: ''}
export const UserContext = createContext(userInfo);

function App() {
  const [user, setUser] = useState(userInfo)

  // useEffect(() => {
  //   console.log('user change', user)
    // const user = localStorage.getItem('user')
    // if (user) {
    //   setUser(JSON.parse(user))
    // }
  // }, [user])

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <AuthRouter setUser={setUser} />
        {
          (!user || !user.userId || !user.role) ? 
          <Login setUser={setUser} /> : 
          <Layout setUser={setUser} />
        }
      </UserContext.Provider>
    </div>
  );
}

export default App;
