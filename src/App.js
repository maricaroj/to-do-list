import { useState, useEffect } from "react";
import "./App.css";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);

  useEffect(() =>{
    const getLocalTodos = () => {
      if(localStorage.getItem('todos') == null){
        localStorage.setItem('todos', JSON.stringify(todos))
      }else{
        const todoLocal = JSON.parse(localStorage.getItem('todos'))
        setTodos(todoLocal)
      }
    }
    getLocalTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(() => {
    const filteredHandler = () => {
      switch (status) {
        case "completed":
          setfilteredTodos(todos.filter((task) => task.completed === true));
          break;
        case "uncompleted":
          setfilteredTodos(todos.filter((task) => task.completed === false));
          break;
        default:
          setfilteredTodos(todos);
      }
    };
    const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }
    filteredHandler();
    saveLocalTodos();
  },[todos, status])

 
  return (
    <div>
      <header>
        <h1>ToDo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
