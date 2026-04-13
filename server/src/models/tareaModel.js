const pool = require('../../config/db');

const tareaModel = {
  getAll: async () => {
    const [rows] = await pool.execute('SELECT * FROM tareas ORDER BY id DESC');
    return rows;
  },

  getById: async (id) => {
    const [rows] = await pool.execute('SELECT * FROM tareas WHERE id = ?', [id]);
    return rows[0];
  },

  create: async ({ titulo, descripcion, prioridad = 'media', estado = 'pendiente', fecha_limite }) => {
    const [result] = await pool.execute(
      'INSERT INTO tareas (titulo, descripcion, prioridad, estado, fecha_limite) VALUES (?, ?, ?, ?, ?)',
      [titulo, descripcion, prioridad, estado, fecha_limite || null]
    );
    return { id: result.insertId, titulo, descripcion, prioridad, estado, fecha_limite };
  },

  update: async (id, { titulo, descripcion, prioridad, estado, fecha_limite }) => {
    const [result] = await pool.execute(
      'UPDATE tareas SET titulo = ?, descripcion = ?, prioridad = ?, estado = ?, fecha_limite = ? WHERE id = ?',
      [titulo, descripcion, prioridad, estado, fecha_limite || null, id]
    );
    return result.affectedRows > 0;
  },

  delete: async (id) => {
    const [result] = await pool.execute('DELETE FROM tareas WHERE id = ?', [id]);
    return result.affectedRows > 0;
  },
};

module.exports = tareaModel;
