import { useState } from "react";

const TodoForm = ({ onAdd }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    onAdd(task.trim());
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        className="input input-bordered w-full"
        placeholder="Enter a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
