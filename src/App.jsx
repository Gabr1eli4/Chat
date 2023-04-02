import "./App.css";
import { UserList } from "./components/UserList";
import { MessageBox } from "./components/MessageBox";
import { MessageInput } from "./components/MessageInput";

function App() {
  return (
    <div className="container">
      <UserList />
      <div className="main">
        <MessageBox />
        <MessageInput />
      </div>
    </div>
  );
}

export default App;
