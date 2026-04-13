import { useState, useEffect, useCallback } from 'react';
import { fetchTareas as apiFetchTareas, createTarea as apiCreateTarea, updateTarea as apiUpdateTarea, deleteTarea as apiDeleteTarea } from '../api/tareas';

export function useTareas() {
  const [tareas, setTareas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiFetchTareas();
      setTareas(data);
    } catch (err) {
      setError('Error al cargar tareas');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const crear = async (data) => {
    setLoading(true);
    try {
      await apiCreateTarea(data);
      await load();
    } catch (err) {
      setError('Error al crear tarea');
      setLoading(false);
    }
  };

  const actualizar = async (id, data) => {
    setLoading(true);
    try {
      await apiUpdateTarea(id, data);
      await load();
    } catch (err) {
      setError('Error al actualizar tarea');
      setLoading(false);
    }
  };

  const eliminar = async (id) => {
    setLoading(true);
    try {
      await apiDeleteTarea(id);
      await load();
    } catch (err) {
      setError('Error al eliminar tarea');
      setLoading(false);
    }
  };

  return { tareas, loading, error, crear, actualizar, eliminar, recargar: load };
}