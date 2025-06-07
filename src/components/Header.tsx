// src/components/Header.tsx
import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  total: number;
  completadas: number;
  progreso: number;
}

const styles = {
  headerBox: (isDark: boolean) => ({
    backgroundColor: isDark ? '#1e293b' : '#f1f5f9',
    padding: '1rem',
    borderRadius: '12px',
    marginBottom: '2rem',
    textAlign: 'left' as const,
    fontFamily: `'Inter', sans-serif`,
    color: isDark ? '#f8fafc' : '#0f172a',
  }),
  headerTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  h1: {
    fontSize: '1.5rem',
    fontWeight: 600,
    marginBottom: '0.25rem',
  },
  p: (isDark: boolean) => ({
  color: isDark ? '#94a3b8' : '#475569',
  fontSize: '0.875rem',
  }),
  headerClock: {
    textAlign: 'right' as const,
    fontSize: '0.875rem',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.25rem',
  },
  stats: (isDark: boolean) => ({
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem',
    backgroundColor: isDark ? '#1e293b' : '#f1f5f9',
    padding: '1rem',
    borderRadius: '12px',
  }),
  statBox: (isDark: boolean) => ({
    backgroundColor: isDark ? '#334155' : '#e2e8f0',
    flex: 1,
    padding: '1rem',
    borderRadius: '10px',
    textAlign: 'center' as const,
  }),
  statP: (isDark: boolean) => ({
    fontSize: '0.875rem',
    color: isDark ? '#cbd5e1' : '#475569',
  }),
  statStrong: {
    display: 'block',
    fontSize: '1.5rem',
    marginTop: '0.25rem',
  },
  themeButton: {
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    fontSize: '0.75rem',
    color: '#fbbf24',
    fontWeight: 400,
  },
};

function Header({ total, completadas, progreso }: HeaderProps) {
  const [time, setTime] = useState<string>(() => new Date().toLocaleTimeString());
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header style={styles.headerBox(isDark)}>
      <div style={styles.headerTop}>
        <div>
          <h1 style={styles.h1}>👤 ¡Hola, Estudiante!</h1>
          <p style={styles.p(isDark)}>Laboratorio de React Hooks</p>
        </div>
        <div style={styles.headerClock}>
          <span>🕒 {time}</span>
          <div style={styles.statBox(isDark)}>
          <button onClick={toggleTheme} style={styles.themeButton}>
            {isDark ?  <h1 style={styles.p(isDark)}>☀️ Claro</h1>:<h1 style={styles.p(isDark)}>🌙 Oscuro</h1>}
          </button>
          </div>
        </div>
      </div>

      <div style={styles.stats(isDark)}>
        <div style={styles.statBox(isDark)}>
          <p style={styles.statP(isDark)}>Total de tareas</p>
          <strong style={styles.statStrong}>{total}</strong>
        </div>
        <div style={styles.statBox(isDark)}>
          <p style={styles.statP(isDark)}>Completadas</p>
          <strong style={{ ...styles.statStrong, color: '#10b981' }}>{completadas}</strong>
        </div>
        <div style={styles.statBox(isDark)}>
          <p style={styles.statP(isDark)}>Progreso</p>
          <strong style={styles.statStrong}>{progreso}%</strong>
        </div>
      </div>
    </header>
  );
}

export default Header;
