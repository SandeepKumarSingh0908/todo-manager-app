import todo from "../data/TodoData";
const TodoListComponent = () => {
  console.log(todo);
  return (
    <div className="todo-list">
      <h1>Todo Items</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>description</th>
            <th>Target Date</th>
            <th>Is Completed</th>
          </tr>
        </thead>
        <tbody>
          {todo.map((todoItem) => (
            <tr key={todoItem.id}>
              <td>{todoItem.id}</td>
              <td>{todoItem.description}</td>
              <td>{todoItem.targetDate.toString()}</td>
              <td>{todoItem.isCompleted.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoListComponent;
