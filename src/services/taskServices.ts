import { Task } from "../../types/task";
import { tasks } from "../data/tasksData";
let currentId = 1;

export const getAllTasks = (): Task[] => {
    return tasks;
};

export const getTaskById = (id: number): Task | null => {
    const task = tasks.find(task => task.id === id);
    return task || null;
};

export const createTask = (
    data: Omit<Task, 'id' | 'dateOfCreation'>
): Task => {
    const newTask: Task = {
        id: currentId++,
        dateOfCreation: new Date(),
        ...data
    };

    tasks.push(newTask);
    return newTask;
};

export const updateTask = (
    id: number,
    data: Partial<Omit<Task, 'id' | 'dateOfCreation'>>
): Task | null => {
    const index = tasks.findIndex(task => task.id === id);

    if (index === -1) {
        return null;
    }

    const updatedTask: Task = {
        ...tasks[index],
        ...data
    };

    tasks[index] = updatedTask;

    return updatedTask;
};

export const deleteTask = (id: number): boolean => {
    const index = tasks.findIndex(task => task.id === id);

    if (index === -1) {
        return false;
    }

    tasks.splice(index, 1);
    return true;
};