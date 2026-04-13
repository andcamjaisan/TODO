import { useState } from 'react';
import { Button } from '../UI/Button';
import styles from './TareaForm.module.css';

export function TareaForm({ tarea, onSubmit, onCancel }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    titulo: tarea?.titulo || '',
    descripcion: tarea?.descripcion || '',
    prioridad: tarea?.prioridad || 'media',
    estado: tarea?.estado || 'pendiente',
    fecha_limite: tarea?.fecha_limite?.slice(0, 16) || ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await onSubmit(formData);
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="titulo" className={styles.label}>Título</label>
        <input
          id="titulo"
          name="titulo"
          required
          value={formData.titulo}
          onChange={handleChange}
          className={styles.input}
          placeholder="Título de la tarea"
        />
      </div>
      
      <div className={styles.field}>
        <label htmlFor="descripcion" className={styles.label}>Descripción</label>
        <textarea
          id="descripcion"
          name="descripcion"
          rows={3}
          value={formData.descripcion}
          onChange={handleChange}
          className={`${styles.textarea} ${styles.input}`}
          placeholder="Descripción opcional"
        />
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="prioridad" className={styles.label}>Prioridad</label>
          <select
            id="prioridad"
            name="prioridad"
            value={formData.prioridad}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="baja">Baja</option>
            <option value="media">Media</option>
            <option value="alta">Alta</option>
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="estado" className={styles.label}>Estado</label>
          <select
            id="estado"
            name="estado"
            value={formData.estado}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="pendiente">Pendiente</option>
            <option value="en progreso">En Progreso</option>
            <option value="hecho">Hecho</option>
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="fecha_limite" className={styles.label}>Fecha Límite</label>
        <input
          type="datetime-local"
          id="fecha_limite"
          name="fecha_limite"
          value={formData.fecha_limite}
          onChange={handleChange}
          className={styles.input}
        />
      </div>

      <div className={styles.actions}>
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="submit" disabled={loading}>
          {loading ? 'Guardando...' : 'Guardar'}
        </Button>
      </div>
    </form>
  );
}