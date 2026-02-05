import { useState } from "react";
import { FiMenu, FiZap } from "react-icons/fi";
// নিচের কম্পোনেন্টগুলো আপনি আলাদা ফাইলে তৈরি করে ইমপোর্ট করবেন
// import Sidebar from "./components/Sidebar"; 
// import TaskInput from "./components/TaskInput";
// import TaskItem from "./components/TaskItem";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [taskInput, setTaskInput] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, text: "Design a futuristic dashboard UI", completed: false },
    { id: 2, text: "Integrate glassmorphism effects", completed: true },
  ]);

  // লজিক ফাংশনসমূহ
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!taskInput.trim()) return;
    const newTodo = { id: Date.now(), text: taskInput, completed: false };
    setTodos([newTodo, ...todos]);
    setTaskInput("");
  };

  const handleDelete = (id) => setTodos(todos.filter(t => t.id !== id));
  const toggleComplete = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden font-sans">
      
      {/* Sidebar - এটি এখন অনেক ক্লিন */}
      <aside className={`${isSidebarOpen ? 'w-72' : 'w-0'} bg-white border-r transition-all duration-500 overflow-hidden flex flex-col`}>
        <div className="p-8 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-400 rounded-xl flex items-center justify-center text-white shadow-lg">
            <FiZap size={22} />
          </div>
          <span className="text-2xl font-black text-slate-800 italic">TodoFlow</span>
        </div>
        {/* NavItems এখানে বসবে */}
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-white/40 backdrop-blur-md border-b flex items-center justify-between px-10">
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2.5 bg-white border rounded-xl hover:shadow-sm">
            <FiMenu size={18} />
          </button>
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-slate-600">Habibullah</span>
            <div className="w-10 h-10 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center font-black">HP</div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto px-10 py-10">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10">
              <h1 className="text-4xl font-black text-slate-900 tracking-tighter">My Inbox</h1>
              <p className="text-slate-500">সব মিলিয়ে {todos.length} টি টাস্ক আছে</p>
            </div>

            {/* Task Input Component - আপনি চাইলে এটিকে আলাদা ফাইলে নিয়ে যেতে পারেন */}
            <form onSubmit={handleAddTask} className="mb-10 relative">
              <input 
                type="text" 
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                placeholder="পরবর্তী কাজ কি?..." 
                className="w-full bg-white border-2 border-slate-100 p-5 rounded-[2rem] shadow-sm outline-none focus:border-red-400 transition-all text-lg font-medium"
              />
              <button type="submit" className="absolute right-3 top-2.5 bottom-2.5 bg-[#E44232] text-white px-6 rounded-[1.5rem] font-black hover:bg-red-600 transition-all">
                যোগ করুন
              </button>
            </form>

            {/* Task List - লুপ চালিয়ে টাস্ক দেখানো */}
            <div className="space-y-4">
              {todos.map(todo => (
                <TaskCard 
                  key={todo.id} 
                  todo={todo} 
                  onToggle={toggleComplete} 
                  onDelete={handleDelete} 
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// ছোট সাব-কম্পোনেন্ট (একই ফাইলে বা আলাদা ফাইলে রাখা যায়)
const TaskCard = ({ todo, onToggle, onDelete }) => (
  <div className={`flex items-center justify-between p-6 bg-white border border-slate-200 rounded-[2rem] hover:shadow-md transition-all ${todo.completed ? 'bg-slate-50/50' : ''}`}>
    <div className="flex items-center gap-4">
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => onToggle(todo.id)}
        className="w-6 h-6 rounded-full accent-green-500 cursor-pointer"
      />
      <span className={`text-lg font-bold ${todo.completed ? 'line-through text-slate-400' : 'text-slate-800'}`}>
        {todo.text}
      </span>
    </div>
    <button onClick={() => onDelete(todo.id)} className="text-slate-300 hover:text-red-500 transition-colors">
      <FiTrash2 size={20} />
    </button>
  </div>
);

import { FiTrash2 } from "react-icons/fi";
export default Dashboard;