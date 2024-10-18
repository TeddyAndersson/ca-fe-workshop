import { z } from 'zod';

export const addTodoDTO = z.object({
    name: z.string().min(1).max(100),
    description: z.string().min(1).max(1000).optional(),
    dueDate: z.date().optional(),
    priority: z.enum(['low', 'medium', 'high']).optional(),
    completed: z.boolean().optional()
}).strict()

export const getTodoDTO = z.object({
    id: z.string()
}).strict()

export const listTodoDTO = z.object({
    byPriority: z.enum(['low', 'medium', 'high']).optional(),
    byDueDate: z.enum(['asc', 'desc']).optional()
}).strict()

export const updateTodoDTO = z.object({
    id: z.string(),
    name: z.string().min(1).max(100).optional(),
    description: z.string().min(1).max(1000).optional(),
    dueDate: z.date().optional(),
    priority: z.enum(['low', 'medium', 'high']).optional(),
    completed: z.boolean()
}).strict()

export const deleteTodoDTO = z.object({
    id: z.string()
}).strict()
