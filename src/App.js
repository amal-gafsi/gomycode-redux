import logo from "./logo.svg";
import "./App.css";
import AddTask from "./components/AddTask";
import ListTasks from "./components/ListTasks";

function App() {
  return (
    <div className="App">
      <AddTask />
      <ListTasks />
    </div>
  );
}

export default App;
