import { TareaCard } from './TareaCard';
import styles from './TareaColumn.module.css';

const columnas = [
  { id: 'pendiente', label: 'Pendiente', headerClass: styles.headerPendiente },
  { id: 'en progreso', label: 'En Progreso', headerClass: styles.headerEnProgreso },
  { id: 'hecho', label: 'Hecho', headerClass: styles.headerHecho }
];

export function getColumnas() {
  return columnas;
}

export function TareaColumn({ estado, tareas, onEdit, onDelete, loading }) {
  const columna = columnas.find(c => c.id === estado);
  const tareasFiltradas = tareas.filter(t => t.estado === estado);

  return (
    <div className={styles.column}>
      <div className={`${styles.header} ${columna.headerClass}`}>
        <div className={styles.headerContent}>
          <h2 className={styles.headerTitle}>{columna.label}</h2>
          <span className={styles.count}>{tareasFiltradas.length}</span>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.list}>
          {tareasFiltradas.map(tarea => (
            <TareaCard 
              key={tarea.id} 
              tarea={tarea} 
              onEdit={onEdit} 
              onDelete={onDelete} 
            />
          ))}
          {tareasFiltradas.length === 0 && !loading && (
            <p className={styles.empty}>No hay tareas</p>
          )}
          {loading && (
            <div className={styles.skeleton}>
              {[1, 2].map(i => (
                <div key={i} className={styles.skeletonItem} style={{ height: '6rem' }} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}