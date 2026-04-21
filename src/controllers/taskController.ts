import { Request, Response } from 'express';
import { createTask, deleteTask, getAllTasks, getTaskById, updateTask } from '../services/taskServices';
import { createTaskSchema, updateTaskSchema } from '../libs/zodSchema';


export const getAll = (req: Request, res: Response): Response => {
    const tasks = getAllTasks();
    return res.status(200).json(tasks);
};

export const getById = (req: Request, res: Response): Response => {
    const id = Number(req.params.id);

    const task = getTaskById(id);

    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
    }

    return res.status(200).json(task);
};

export const create = (req: Request, res: Response): Response => {
    const result = createTaskSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            errors: result.error.format()
        });
    }

    const task = createTask({
        ...result.data,
        status: result.data.status || 'TODO',
        priority: result.data.priority || 'LOW'
    });

    return res.status(201).json(task);
};

export const update = (req: Request, res: Response): Response => {
    const id = Number(req.params.id);

    const result = updateTaskSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            errors: result.error.format()
        });
    }

    const updatedTask = updateTask(id, result.data);

    if (!updatedTask) {
        return res.status(404).json({ message: 'Task not found' });
    }

    return res.status(200).json(updatedTask);
};

export const remove = (req: Request, res: Response): Response => {
    const id = Number(req.params.id);

    const success = deleteTask(id);

    if (!success) {
        return res.status(404).json({ message: 'Task not found' });
    }

    return res.status(204).send();
};