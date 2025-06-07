import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TaskStats from './components/TaskStats';
import { Task } from './components/TaskItem';
import { useTheme } from './context/ThemeContext';

function App() {
  const { isDark } = useTheme();

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? '#0f172a' : '#f8fafc';
    document.body.style.color = isDark ? '#f8fafc' : '#0f172a';
  }, [isDark]);

  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');
  const [newPriority, setNewPriority] = useState('media');
  const [filter, setFilter] = useState('Todas');

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, {
      id: Date.now(),
      title: newTask,
      priority: newPriority,
      completed: false
    }]);
    setNewTask('');
    setNewPriority('media');
  };

  const handleToggleComplete = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = filter === 'Todas'
    ? tasks
    : tasks.filter(t => t.priority === filter.toLowerCase());

  const completed = tasks.filter(t => t.completed).length;

  const containerStyle = {
    backgroundColor: isDark ? '#0f172a' : '#f8fafc',
    minHeight: '100vh',
    padding: '2rem',
    color: isDark ? '#f8fafc' : '#0f172a',
    display: 'flex',
    justifyContent: 'center',
  };

  const contentStyle = {
    width: '100%',
    maxWidth: '768px',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <Header total={tasks.length} completadas={completed} progreso={Math.round((completed / tasks.length || 0) * 100)} />
        <TaskInput
          newTask={newTask}
          setNewTask={setNewTask}
          newPriority={newPriority}
          setNewPriority={setNewPriority}
          onAdd={handleAddTask}
        />
        <TaskList
          tasks={filteredTasks}
          onToggle={handleToggleComplete}
          onDelete={handleDelete}
          filter={filter}
          setFilter={setFilter}
        />
        <TaskStats />
      </div>
    </div>
  );
}

export default App;
