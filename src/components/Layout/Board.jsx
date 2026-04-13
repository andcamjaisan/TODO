import { TareaColumn, getColumnas } from '../Tarea/TareaColumn';
import styles from './Board.module.css';

export function Board({ tareas, onEdit, onDelete, loading, error }) {
  const columnas = getColumnas();

  if (error) {
    return (
      <div className={styles.error}>
        <div className={styles.errorContent}>
          <p className={styles.errorTitle}>{error}</p>
          <p className={styles.errorText}>Intenta de nuevo más tarde</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.board}>
      {columnas.map(col => (
        <TareaColumn
          key={col.id}
          estado={col.id}
          tareas={tareas}
          onEdit={onEdit}
          onDelete={onDelete}
          loading={loading}
        />
      ))}
    </div>
  );
}