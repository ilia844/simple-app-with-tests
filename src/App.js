import { useState } from "react";

import { UserForm, UserList } from "./components";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (user) => {
    setUsers((prev) => [...prev, user]);
  };

  return (
    <div className="App">
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default App;
