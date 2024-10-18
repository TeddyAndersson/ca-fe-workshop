export type Todo = {
    id: string;
    completed: boolean;
    name?: string;
    description?: string;
    dueDate?: Date;
    priority?: 'low' |'medium' | 'high';
}