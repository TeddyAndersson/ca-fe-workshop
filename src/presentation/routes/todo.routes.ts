import { buildInMemoryTodoRepository } from "@src/infrastructure/presistence/InMemoryTodo.repository";
import { buildTodoController } from "../../interface/controllers/todo.controller";
import { buildAddTodoUseCase, buildDeleteTodoUseCase, buildFindTodoUseCase, buildListTodosUseCase, buildUpdateTodoUseCase } from "@src/core/application/use-cases/todo";

import { Router } from "express";
import { auth } from "../middlewares/auth";

const router = Router();

const todoRepository = buildInMemoryTodoRepository();
const addTodoUseCase = buildAddTodoUseCase({ repositories: { todoRepository }})
const findTodoUseCase = buildFindTodoUseCase({ repositories: { todoRepository}});
const listTodoUseCase = buildListTodosUseCase({ repositories: { todoRepository}});
const deleteTodoUseCase = buildDeleteTodoUseCase({ repositories: { todoRepository}});
const updateTodoUseCase = buildUpdateTodoUseCase({ repositories: { todoRepository}});
const todoController =  buildTodoController({
    addTodo: addTodoUseCase, 
    getTodo: findTodoUseCase, 
    listTodo: listTodoUseCase, 
    deleteTodo: deleteTodoUseCase, 
    updateTodo: updateTodoUseCase
});


export default (router: Router): void => {
    router.post('/todos', auth([]), (req, res) => todoController.addTodo(req,res));
    router.get('/todos', auth([]), (req, res) => todoController.listTodo(req, res));
    router.get('/todos/:id', auth([]), (req, res) => todoController.getTodo(req, res));
    router.put('/todos/:id', auth([]), (req, res) => todoController.updateTodo(req, res));
    router.delete('/todos/:id', auth([]), (req, res) => todoController.deleteTodo(req, res));
}

export {router as todoRoutes}


