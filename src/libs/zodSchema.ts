import { z } from 'zod';

export const createTaskSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    description: z.string().min(1, 'Description is required'),
    imageSource: z.string().optional(),
    status: z.enum(['TODO', 'DONE']).optional(),
    priority: z.enum(['HIGH', 'MEDIUM', 'LOW']).optional()
});

export const updateTaskSchema = z.object({
    title: z.string().min(1).optional(),
    description: z.string().min(1).optional(),
    imageSource: z.string().optional(),
    status: z.enum(['TODO', 'DONE']).optional(),
    priority: z.enum(['HIGH', 'MEDIUM', 'LOW']).optional()
});