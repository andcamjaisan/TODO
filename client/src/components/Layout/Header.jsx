import { Button } from '../UI/Button';
import styles from './Header.module.css';

export function Header({ onNewTarea, loading }) {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.title}>Mis Tareas</h1>
        <p className={styles.subtitle}>Organiza tu trabajo</p>
      </div>
      <Button onClick={onNewTarea} disabled={loading}>
        <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Nueva Tarea
      </Button>
    </header>
  );
}