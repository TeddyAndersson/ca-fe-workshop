import { TodoRepository } from "@src/core/application/interfaces/repositories/todo.repository";
import { Todo } from "@src/core/domain/entities/Todo";

const todos: Todo[] = []

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
    findMany: async ({ byPriority, byDueDate }) => {
        const filteredTodos = todos.filter(todo => {
            if (byPriority && todo.priority!== byPriority) {
                return false;
            }
            if (byDueDate && (todo.dueDate && todo.dueDate < new Date() && byDueDate === 'asc') || ( todo.dueDate && todo.dueDate > new Date() && byDueDate === 'desc')) {
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