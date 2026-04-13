import { Badge } from '../UI/Badge';
import { Button } from '../UI/Button';
import styles from './TareaCard.module.css';

export function TareaCard({ tarea, onEdit, onDelete }) {
  const handleDelete = (e) => {
    e.stopPropagation();
    if (confirm('¿Eliminar tarea?')) onDelete(tarea.id);
  };

  return (
    <div 
      className={styles.card}
      onClick={() => onEdit(tarea)}
      tabIndex={0}
      role="button"
      aria-label={`Editar tarea: ${tarea.titulo}`}
      onKeyDown={(e) => e.key === 'Enter' && onEdit(tarea)}
    >
      <h3 className={styles.title}>{tarea.titulo}</h3>
      {tarea.descripcion && (
        <p className={styles.description}>{tarea.descripcion}</p>
      )}
      <div className={styles.footer}>
        <Badge variant={tarea.prioridad}>{tarea.prioridad}</Badge>
        <Button 
          variant="ghost" 
          onClick={handleDelete} 
          className={styles.deleteBtn}
          aria-label="Eliminar tarea"
        >
          <svg className={styles.deleteIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </Button>
      </div>
    </div>
  );
}