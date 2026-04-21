import { Router } from 'express';
import {
    getAll,
    getById,
    create,
    update,
    remove
} from '../controllers/taskController';

const router = Router();

router.get('/tasks', getAll);

router.get('/tasks/:id', getById);

router.post('/tasks', create);

router.put('/tasks/:id', update);

router.delete('/tasks/:id', remove);

export default router;