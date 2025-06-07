import React from 'react';
import { useTheme } from '../context/ThemeContext';

export interface Task {
  id: number;
  title: string;
  priority: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const getStyles = (isDark: boolean) => {
  const baseStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.75rem 1rem',
    borderRadius: '10px',
    marginBottom: '0.75rem',
  };

  return {
    taskItem: {
      ...baseStyle,
      backgroundColor: isDark ? '#334155cc' : '#e2e8f099',
    },
    alta: {
      backgroundColor: isDark ? '#ff8f8f22' : '#ffe4e422',
      borderLeft: '4px solid #ff8f8f',
    },
    media: {
      backgroundColor: isDark ? '#ffeeaa22' : '#fffacc22',
      borderLeft: '4px solid #ffeeaa',
    },
    baja: {
      backgroundColor: isDark ? '#c2ff7322' : '#eaffc822',
      borderLeft: '4px solid #c2ff73',
    },
    span: {
      flex: 1,
      marginLeft: '0.75rem',
      color: isDark ? '#f8fafc' : '#0f172a',
    },
    completed: {
      textDecoration: 'line-through',
      color: isDark ? '#ffffff' : '#94a3b8',
    },
    tag: {
      padding: '0.25rem 0.5rem',
      borderRadius: '8px',
      fontSize: '0.75rem',
      fontWeight: 600,
      marginRight: '0.75rem',
    },
    tags: {
      alta: { backgroundColor: '#ff8f8f', color: 'rgb(204, 0, 0)' },
      media: { backgroundColor: '#ffeeaa', color: 'rgb(201, 164, 0)' },
      baja: { backgroundColor: '#c2ff73', color: 'rgb(74, 185, 0)' },
    },
    checkbox: {
      accentColor: isDark ? '#3b82f6' : '#2563eb',
      transform: 'scale(1.25)',
    },
    button: {
      background: 'none',
      border: 'none',
      fontSize: '1.1rem',
      cursor: 'pointer',
      color: '#f87171',
      marginLeft: '1rem',
    },
  };
};

function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  const { isDark } = useTheme(); // 👈 igual que en TaskInput
  const styles = getStyles(isDark);

  const itemStyle = {
    ...styles.taskItem,
    ...(task.priority === 'alta'
      ? styles.alta
      : task.priority === 'media'
      ? styles.media
      : styles.baja),
  };

  const textStyle = {
    ...styles.span,
    ...(task.completed ? styles.completed : {}),
  };

  const tagStyle = {
    ...styles.tag,
    ...styles.tags[task.priority as keyof typeof styles.tags],
  };

  return (
    <div style={itemStyle}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        style={styles.checkbox}
      />
      <span style={textStyle}>{task.title}</span>
      <span style={tagStyle}>{task.priority}</span>
      <button onClick={() => onDelete(task.id)} style={styles.button}>🗑</button>
    </div>
  );
}

export default TaskItem;
