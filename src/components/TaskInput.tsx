import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface TaskInputProps {
  newTask: string;
  setNewTask: (value: string) => void;
  newPriority: string;
  setNewPriority: (value: string) => void;
  onAdd: () => void;
}

const getStyles = (isDark: boolean) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: isDark ? '#1e293b' : '#f1f5f9',
    padding: '1rem',
    borderRadius: '12px',
    marginBottom: '1rem',
  },
  input: {
    flex: 2,
    padding: '0.5rem',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: isDark ? '#334155' : '#e2e8f0',
    color: isDark ? 'white' : '#0f172a',
    marginRight: '0.5rem',
  },
  select: {
    flex: 1,
    padding: '0.5rem',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: isDark ? '#334155' : '#e2e8f0',
    color: isDark ? 'white' : '#0f172a',
    marginRight: '0.5rem',
  },
  button: {
    backgroundColor: '#3b82f6',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '10px',
    color: 'white',
    cursor: 'pointer',
    fontWeight: 600,
  },
});

function TaskInput({ newTask, setNewTask, newPriority, setNewPriority, onAdd }: TaskInputProps) {
  const { isDark } = useTheme(); // 👈 importante
  const styles = getStyles(isDark);

  return (
    <div style={styles.wrapper}>
      <input
        type="text"
        placeholder="¿Qué necesitas hacer?"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
        style={styles.input}
      />
      <select
        value={newPriority}
        onChange={e => setNewPriority(e.target.value)}
        style={styles.select}
      >
        <option value="alta">Alta</option>
        <option value="media">Media</option>
        <option value="baja">Baja</option>
      </select>
      <button onClick={onAdd} style={styles.button}>Agregar</button>
    </div>
  );
}

export default TaskInput;
