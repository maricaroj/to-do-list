import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import "./App.css";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);
  const [user, setUser] = useState("");

  const traerDesdeFirebase = () => {
    db.collection("todos").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setTodos(docs);
    });
  };

  useEffect(traerDesdeFirebase, []);

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

    filteredHandler();
  }, [todos, status]);

  const getLocalUser = () => {
    if (localStorage.getItem("user") == null) {
      const nombreUsuario = prompt("Ingresa tu nombre");
      setUser(nombreUsuario);
      localStorage.setItem("user", JSON.stringify(nombreUsuario));
    } else {
      const todoLocal = JSON.parse(localStorage.getItem("user"));
      setUser(todoLocal);
    }
  };
  useEffect(getLocalUser, []);

  return (
    <div>
      <header>
        <h1>{user && user + "'s"} ToDo List</h1>
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
