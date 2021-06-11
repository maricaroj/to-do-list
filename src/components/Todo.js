const Todo = ({ todo, setTodos, todos }) => {

  const deleteHandler = () => {
    setTodos(todos.filter(task => task.id !== todo.id))
  }

  const completeHandler = () =>{
    setTodos(todos.map(item => {
      if(todo.id === item.id){
        return {
          ...item, completed: !item.completed
        }
      }
      return item;
    }))
  }

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed && 'completed'}`}>
        {todo.text}
      </li>
      <button onClick={completeHandler} className={`complete-btn ${todo.completed && 'btn-change'}`}>
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
};

export default Todo;
