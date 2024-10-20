import { TodoRepository } from "../../core/application/interfaces/repositories/todo.repository";
import { Todo } from "../../core/domain/entities/Todo";

const todos: Todo[] = [
    { id: '1', completed: false, name: 'Buy groceries', priority: 'medium' },
    { id: '2', completed: true, name: 'Clean the house', priority: 'high' }
]

export const buildInMemoryTodoRepository = (): TodoRepository => ({
    add: async (todo): Promise<[Todo | null, Error | null]> => {
        if (!todo) {
            return [null, new Error('todo can not be undefined')];
        }

        todos.push(todo);
        return [todo, null]
    },
    find: async (id) => {
        const todo = todos.find(todo => todo.id === id) || null;
        return [todo, null]
    },
    findMany: async ({ byPriority, byOrder }) => {
        const filteredTodos = todos.filter(todo => {
            if (byPriority && todo.priority!== byPriority) {
                return false;
            }
            if (byOrder && (todo.dueDate && todo.dueDate < new Date() && byOrder === 'asc') || ( todo.dueDate && todo.dueDate > new Date() && byOrder === 'desc')) {
                return false;
            }
            return true;
        });

        return [filteredTodos, null]
    },
    update: async (todo) => {
        if (!todo) {
            return [null, new Error('todo can not be undefined')];
        }

        const index = todos.findIndex(t => t.id === todo.id);
        if (index === -1) {
            return [null, new Error('todo not found')];
        }

        todos[index] = todo;
        return [todo, null]
    },
    delete: async (id) => {
        if (!id) {
            return [null, new Error('id can not be undefined')];
        }

        const index = todos.findIndex(t => t.id === id);
        if (index === -1) {
            return [null, new Error('todo not found')];
        };
        const [deletedTodo] = todos.splice(index, 1);

        return [deletedTodo.id, null]
    }
})