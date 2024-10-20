import { AddTodo, DeleteTodo, FindManyTodos, FindTodo, UpdateTodo } from "../../core/domain/use-cases/todo";
import { addTodoDTO, deleteTodoDTO, getTodoDTO, listTodoDTO, updateTodoDTO } from "../dto/todo.dto";
import { Todo } from "../../core/domain/entities/Todo";


type TBuildTodoControllerDependecies = {
    addTodo: AddTodo,
    getTodo: FindTodo,
    listTodos: FindManyTodos,
    updateTodo: UpdateTodo,
    deleteTodo: DeleteTodo,
}

export type TodoController = {
    addTodo: (input: {todo: Omit<Todo, 'id' | 'completed'>}) => Promise<Todo>,
    getTodo: (input: {id: string}) => Promise<Todo>,
    listTodos: (input: {byPriority?: Todo['priority'], byOrder?: 'asc' | 'desc'}) => Promise<Todo[]>,
    updateTodo: (input:{todo: Todo}) => Promise<Todo>,
    deleteTodo: (input: {id: string}) => Promise<{id: string}>,
}

export const buildTodoController = ({addTodo, getTodo, listTodos, deleteTodo, updateTodo }: TBuildTodoControllerDependecies): TodoController => ({
    addTodo: async (input) => {

        const todo: Todo = {
            id: Math.random().toString(36).substr(2, 9),
            completed: false,
            ...input.todo
        }

        const [addedTodo, error] = await addTodo(todo)
        if (!addedTodo) {
            console.log(error)
            throw new Error("An error occured while adding the todo")
        }

        return todo
    },
    getTodo: async (input) => {

        const { id } = input; 
        const [todo, error] = await getTodo(id)
        if (!todo)  {
            console.log(error);
            throw new Error("An error occured while adding the todo")
        }

        return todo
    },
    listTodos: async (input) => {
        const { byPriority, byOrder } = input
        const [todos, error] = await listTodos({byPriority, byOrder})
        if (!todos) { 
            console.error(error)
            throw new Error("An error occured while retriving the list of todos")
        }

        return todos
    },
    updateTodo: async (input) => {
        const [updatedTodo, error] = await updateTodo(input.todo)
        if (!updatedTodo) {
            console.error(error)
            throw new Error("An error occured while updating your todo")
        }

        return updatedTodo
    },
    deleteTodo: async (input) => {
        const { id } = input;
        const [todoId, error] = await deleteTodo(id)
        if (!todoId) {
            console.log(error)
            throw new Error("An error occured while deleting the todo")
        }

        return { id: todoId }
    }
}) 