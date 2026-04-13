const tareaModel = require('../models/tareaModel');

const tareaController = {
  getAll: async (req, res) => {
    try {
      const tareas = await tareaModel.getAll();
      res.json(tareas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const tarea = await tareaModel.getById(req.params.id);
      if (!tarea) return res.status(404).json({ error: 'Tarea no encontrada' });
      res.json(tarea);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  create: async (req, res) => {
    try {
      const nuevaTarea = await tareaModel.create(req.body);
      res.status(201).json(nuevaTarea);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const actualizado = await tareaModel.update(req.params.id, req.body);
      if (!actualizado) return res.status(404).json({ error: 'Tarea no encontrada' });
      res.json({ message: 'Tarea actualizada' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const eliminado = await tareaModel.delete(req.params.id);
      if (!eliminado) return res.status(404).json({ error: 'Tarea no encontrada' });
      res.json({ message: 'Tarea eliminada' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = tareaController;
