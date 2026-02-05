import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete, onToggle }) => {
  if (!todos.length) {
    return <p className="text-center text-gray-400">No tasks available</p>;
  }

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
