import { useState } from "react";
import { Router } from './route';

function App() {
  const [auth, setAuth] = useState(false)

  return (
    <div className="App">
      <Router auth={auth}/>
    </div>
  );
}

export default App;
