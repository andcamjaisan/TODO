const API_URL = 'http://localhost:5000/api/tareas';

export const fetchTareas = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const createTarea = async (data) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
};

export const updateTarea = async (id, data) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
};

export const deleteTarea = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};