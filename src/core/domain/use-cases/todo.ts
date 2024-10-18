import { Todo } from "../entities/Todo";
import { UseCaseResponse } from "./types";


// ADD TODO
export type AddTodo = (todo: Todo) => UseCaseResponse<Todo>


// FIND TODO
export type FindTodo = (byId: string) => UseCaseResponse<Todo>


// FIND MANY TODOS
export type FindManyTodos = (filters: {
    byPriority?: 'low' |'medium' | 'high';
    byDueDate?: 'asc' | 'desc';
}) => UseCaseResponse<Todo[]>


// UPDATE TODO
export type UpdateTodo = (todo: Todo) => UseCaseResponse<Todo>

// DELETE TODO
export type DeleteTodo = (byId: string) => UseCaseResponse<Todo["id"]>