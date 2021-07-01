import { useState } from "react";
import { db } from "../firebase-config";

const Form = ({ todos, setTodos, inputText, setInputText, setStatus }) => {
  const [error, setError] = useState(false);

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText.trim().length === 0) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1500);
      return;
    }
    setError(false);

    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 10000,
      },
    ]);
    guardarFirebase({
      text: inputText,
      completed: false,
      id: Math.random() * 10000,
    });
    setInputText("");
  };

  const inputTextHandler = (e) => setInputText(e.target.value);

  const statusHandler = (e) => setStatus(e.target.value);

  const guardarFirebase = (tarea) => {
    db.collection("todos")
      .add(tarea)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <form>
      <div className="input-container">
        <input
          onChange={inputTextHandler}
          type="text"
          value={inputText}
          className="todo-input"
          placeholder={error ? "¡Escríbeme!" : "¿Qué debes hacer?"}
        />
        <button
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
      </div>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">Todas</option>
          <option value="completed">Completas</option>
          <option value="uncompleted">Incompletas</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
