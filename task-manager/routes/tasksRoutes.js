const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskcontroller');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/tasks', authMiddleware, taskController.getTasks);
router.get('/tasks/:id', authMiddleware, taskController.getTaskById);
router.post('/tasks', authMiddleware, taskController.createTask);
router.put('/tasks/:id', authMiddleware, taskController.updateTask);
router.delete('/tasks/:id', authMiddleware, taskController.deleteTask);
router.patch('/tasks/:id/complete', authMiddleware, taskController.completeTask);

module.exports = router;
