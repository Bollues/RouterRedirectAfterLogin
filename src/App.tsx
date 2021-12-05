import { createContext, useState, useEffect } from "react";
import Layout from './component/proLayout';
import { Login } from "./page/login";
import { Route } from "react-router";

export const UserContext = createContext('');

function App() {
  const [user, setUser] = useState('')

  // useEffect(() => {
  //   console.log('user change:', user)
  // }, [user])

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Route path="/login"><Login setUser={setUser}/></Route>
        {
          !user ? 
          <Login setUser={setUser}/> : 
          <Layout setUser={setUser}/>
        }
      </UserContext.Provider>
    </div>
  );
}

export default App;
