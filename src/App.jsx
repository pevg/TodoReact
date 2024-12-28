import "./App.css";
import { TodoTitle } from "./components/TodoTitle";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
function App() {
  return (
    <>
      <TodoTitle />
      <TodoSearch />
      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>
    </>
  );
}

export default App;
