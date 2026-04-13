const express = require('express');
const tareaController = require('../controllers/tareaController');

const router = express.Router();

router.get('/', tareaController.getAll);
router.get('/:id', tareaController.getById);
router.post('/', tareaController.create);
router.put('/:id', tareaController.update);
router.delete('/:id', tareaController.delete);

module.exports = router;
