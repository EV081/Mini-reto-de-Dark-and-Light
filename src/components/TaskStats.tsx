import React from 'react';
import { useTheme } from '../context/ThemeContext';

function TaskStats() {
  const { isDark } = useTheme();

  const styles = {
    section: {
      marginTop: '2rem',
      backgroundColor: isDark ? '#1e293b' : '#f1f5f9',
      padding: '1rem 1.5rem',
      borderRadius: '12px',
      color: isDark ? '#f8fafc' : '#0f172a',
    },
    h3: {
      marginBottom: '1rem',
    },
    ul: {
      listStyle: 'none',
      padding: 0,
    },
    li: {
      marginBottom: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
  };

  return (
    <section style={styles.section}>
      <h3 style={styles.h3}>✅ Conceptos implementados en este laboratorio:</h3>
      <ul style={styles.ul}>
        <li style={styles.li}>✔️ Componentes funcionales y props</li>
        <li style={styles.li}>✔️ useState para manejo de estado</li>
        <li style={styles.li}>✔️ useEffect para efectos secundarios</li>
        <li style={styles.li}>✔️ useRef para referencias DOM</li>
        <li style={styles.li}>✔️ useContext para estado global</li>
        <li style={styles.li}>✔️ createContext para crear contextos</li>
      </ul>
    </section>
  );
}

export default TaskStats;
