import { AddTodo, DeleteTodo, FindManyTodos, FindTodo, UpdateTodo } from "@src/core/domain/use-cases/todo";
import { addTodoDTO, deleteTodoDTO, getTodoDTO, listTodoDTO, updateTodoDTO } from "../dto/todo.dto";
import { Request, Response } from "express";
import { Todo } from "@src/core/domain/entities/Todo";


type TBuildTodoControllerDependecies = {
    addTodo: AddTodo,
    getTodo: FindTodo,
    listTodo: FindManyTodos,
    updateTodo: UpdateTodo,
    deleteTodo: DeleteTodo,
}

export const buildTodoController = ({addTodo, getTodo, listTodo, deleteTodo, updateTodo }: TBuildTodoControllerDependecies) => ({
    addTodo: async (req: Request, res: Response) => {
        const dto = await addTodoDTO.safeParseAsync(req.body);

        if (!dto.success) {
            return res.status(400).json(dto.error.issues);
        }

        const todo: Todo = {
            id: Math.random().toString(36).substr(2, 9),
            completed: false,
            ...dto.data
        }

        const [addedTodo, error] = await addTodo(todo)
        if (!addedTodo) {
            return res.status(500).json(JSON.stringify(error));
        }

        res.json(addedTodo);
    },
    getTodo: async (req: Request, res: Response) => {
        const dto = await getTodoDTO.safeParseAsync({id: req.params.id});

        if (!dto.success) {
            return res.status(400).json({message: "Some of the passed parameters are not valid", issues: dto.error.issues});
        }

        const { id } = dto.data; 
        const [todo, error] = await getTodo(id)
        if (!todo)  {
            return res.status(404).json(JSON.stringify(error));
        }

        res.json(todo)
    },
    listTodo: async (req: Request, res: Response) => {
        const dto = await listTodoDTO.safeParseAsync(req.params);

        if (!dto.success) {
            return res.status(400).json(JSON.stringify(dto.error.issues));
        }
        
        const { byPriority, byDueDate } = dto.data
        const [todos, error] = await listTodo({byPriority, byDueDate})
        if (!todos || !todos.length) { 
            return res.status(404).json(JSON.stringify(error));
        }

        res.json(todos);
    },
    updateTodo: async (req: Request, res: Response) => {
        const dto = await updateTodoDTO.safeParseAsync({id: req.params.id, ...req.body});

        if (!dto.success) {
            return res.status(400).json(dto.error.issues);
        }

        const todo: Todo = {
           ...dto.data
        }

        const [updatedTodo, error] = await updateTodo(todo)
        console.log(updatedTodo)
        if (!updatedTodo) {
            return res.status(500).json(JSON.stringify(error));
        }

        res.json(updatedTodo);
    },
    deleteTodo: async (req: Request, res: Response) => {
        const dto = await deleteTodoDTO.safeParseAsync({id: req.params.id});

        if (!dto.success) {
            return res.status(400).json(dto.error.issues);
        }
        const { id } = dto.data; 
        const [todoId, error] = await deleteTodo(id)
        if (!todoId) {
            return res.status(500).json(JSON.stringify(error));
        }

        res.status(200).json({message: `Todo with id '${id} deleted'`});
    }
}) 