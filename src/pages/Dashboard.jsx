import React, { useState, useEffect } from 'react';
import { FiPlus, FiTrash2, FiCheckCircle, FiCircle, FiActivity, FiFlag } from 'react-icons/fi';

const Dashboard = () => {
  // 1. Load data using LocalStorage (Database-free)
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('my-local-tasks');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Low");

  // Save to LocalStorage whenever the todos state changes
  useEffect(() => {
    localStorage.setItem('my-local-tasks', JSON.stringify(todos));
  }, [todos]);

  // 2. Function to add a new task
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: task,
      priority: priority,
      completed: false,
      date: new Date().toLocaleDateString('en-US') // English Date Format
    };

    setTodos([newTodo, ...todos]);
    setTask("");
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  // Progress Calculation
  const completedCount = todos.filter(t => t.completed).length;
  const progress = todos.length > 0 ? (completedCount / todos.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-[#F3F4F6] py-10 px-4">
      <div className="max-w-3xl mx-auto">
        
        {/* Daily Progress Section */}
        <div className="bg-white p-6 rounded-[2.5rem] shadow-sm mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-black text-gray-800 flex items-center gap-2">
              <FiActivity className="text-red-500" /> Daily Progress
            </h2>
            <span className="text-sm font-black text-red-500 bg-red-50 px-3 py-1 rounded-full">
              {Math.round(progress)}% Completed
            </span>
          </div>
          <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-red-500 to-orange-400 h-full transition-all duration-700" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleAddTodo} className="bg-white p-4 rounded-[2.5rem] shadow-lg mb-10 border-2 border-transparent focus-within:border-red-200 transition-all">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="What needs to be done?"
            className="w-full text-xl outline-none px-4 py-3 font-semibold text-gray-700"
          />
          <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-50">
            <div className="flex gap-2 items-center">
              <span className="text-sm font-bold text-gray-400 mr-2">Priority:</span>
              <select 
                value={priority} 
                onChange={(e) => setPriority(e.target.value)}
                className="bg-gray-100 px-3 py-2 rounded-xl text-xs font-bold text-gray-600 outline-none cursor-pointer"
              >
                <option value="High">🔴 High Priority</option>
                <option value="Medium">🟡 Medium Priority</option>
                <option value="Low">🟢 Low Priority</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-[#E44232] text-white px-8 py-3 rounded-2xl font-black flex items-center gap-2 hover:bg-red-600 shadow-lg shadow-red-100 transition-all"
            >
              Add Task <FiPlus strokeWidth={3} />
            </button>
          </div>
        </form>

        {/* Task List Container */}
        <div className="space-y-4">
          <h3 className="text-lg font-black text-gray-700 ml-4 mb-2 italic underline decoration-red-200">
            My Tasks ({todos.length})
          </h3>
          
          {todos.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-[3rem] border-2 border-dashed border-gray-100">
              <p className="text-gray-400 font-bold italic">No tasks added yet! Start by adding one above.</p>
            </div>
          ) : (
            todos.map((item) => (
              <div key={item.id} className={`group flex items-center justify-between bg-white p-6 rounded-[2.5rem] shadow-sm transition-all border-2 ${item.completed ? 'opacity-50 border-transparent bg-gray-50' : 'border-white hover:border-red-100'}`}>
                <div className="flex items-center gap-5">
                  <button onClick={() => toggleComplete(item.id)}>
                    {item.completed ? <FiCheckCircle className="text-green-500" size={28} /> : <FiCircle className="text-gray-300 hover:text-red-400 transition-colors" size={28} />}
                  </button>
                  <div>
                    <p className={`text-lg font-bold ${item.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                      {item.text}
                    </p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded-md flex items-center gap-1 ${item.priority === 'High' ? 'bg-red-50 text-red-500' : 'bg-gray-100 text-gray-500'}`}>
                        <FiFlag size={10} /> {item.priority}
                      </span>
                      <span className="text-[10px] text-gray-300 font-bold italic">{item.date}</span>
                    </div>
                  </div>
                </div>
                <button onClick={() => deleteTodo(item.id)} className="opacity-0 group-hover:opacity-100 p-3 text-gray-300 hover:text-red-500 transition-all">
                  <FiTrash2 size={22} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;