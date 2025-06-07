import React from 'react';
import TaskItem, { Task } from './TaskItem';
import { useTheme } from '../context/ThemeContext';

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  filter: string;
  setFilter: (value: string) => void;
}

const getStyles = (isDark: boolean) => ({
  h1: {
    fontSize: '1.5rem',
    fontWeight: 600,
    marginBottom: '0.25rem',
    color: isDark ? '#f8fafc' : '#0f172a',
  },
  container: {
    backgroundColor: isDark ? '#1e293b' : '#f1f5f9',
    borderRadius: '12px',
    padding: '1rem',
    marginTop: '1rem',
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  select: {
    padding: '0.5rem',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: isDark ? '#334155' : '#e2e8f0',
    color: isDark ? 'white' : '#0f172a',
  },
});

function TaskList({ tasks, onToggle, onDelete, filter, setFilter }: TaskListProps) {
  const { isDark } = useTheme();
  const styles = getStyles(isDark);
  const total = tasks.length;

  return (
    <div style={styles.container}>
      <div style={styles.headerRow}>
        <h1 style={styles.h1}>Mis tareas({total})</h1>
        <select value={filter} onChange={e => setFilter(e.target.value)} style={styles.select}>
          <option value="Todas">Todas</option>
          <option value="alta">Alta</option>
          <option value="media">Media</option>
          <option value="baja">Baja</option>
        </select>
      </div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete}/>
      ))}
    </div>
  );
}

export default TaskList;
