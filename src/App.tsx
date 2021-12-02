import { createContext, useState } from "react";
import { Router } from './route';

export const UserContext = createContext('');

function App() {
  const [user, setUser] = useState('')

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Router setUser={setUser}/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
