const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <div className="flex justify-between items-center bg-base-200 p-3 rounded-lg mb-2">
      <div
        className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""}`}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </div>

      <button onClick={() => onDelete(todo.id)} className="btn btn-xs btn-error">
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
