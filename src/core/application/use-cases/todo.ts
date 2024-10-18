import { AddTodo, DeleteTodo, FindManyTodos, FindTodo, UpdateTodo } from "@src/core/domain/use-cases/todo";
import { TodoRepository } from "../interfaces/repositories/todo.repository";

export const buildAddTodoUseCase = (
  deps: {
    repositories: {
      todoRepository: TodoRepository
    }
  }): AddTodo  => async (todo) => {
    const { repositories } = deps;
    const { todoRepository } = repositories;

    const [result, repositoryError] = await todoRepository.add(todo)
    if (!result) {
        return [null, repositoryError]
    }

    return [result, null]
}

export const buildFindTodoUseCase = (
  deps: {
    repositories: {
      todoRepository: TodoRepository
    }
  }): FindTodo  => async (id) => {
    const { repositories } = deps;
    const { todoRepository } = repositories;

    const [result, repositoryError] = await todoRepository.find(id)
    if (!result) {
        return [null, repositoryError]
    }

    return [result, null]
}

export const buildListTodosUseCase = (
  deps: {
    repositories: {
      todoRepository: TodoRepository
    }
  }): FindManyTodos  => async ({byPriority, byDueDate}) => {
    const { repositories } = deps;
    const { todoRepository } = repositories;

    const [result, repositoryError] = await todoRepository.findMany({byPriority, byDueDate})
    if (!result) {
        return [null, repositoryError]
    }

    return [result, null]
}

export const buildDeleteTodoUseCase = (
  deps: {
    repositories: {
      todoRepository: TodoRepository
    }
  }): DeleteTodo  => async (id) => {
    const { repositories } = deps;
    const { todoRepository } = repositories;

    const [todo, findTodoError] = await todoRepository.find(id)
    if(!todo) {
      return [null, findTodoError]
    }

    const [deletedTodo, deleteTodoError] = await todoRepository.delete(todo.id)
    if (!deletedTodo) {
      return [null, deleteTodoError]
    }

    return [deletedTodo, null]
}

export const buildUpdateTodoUseCase = (
  deps: {
    repositories: {
      todoRepository: TodoRepository
    }
  }): UpdateTodo  => async (todo) => {
    const { repositories } = deps;
    const { todoRepository } = repositories;

    const [result, repositoryError] = await todoRepository.update(todo)
    if (!result) {
      return [null, repositoryError]
    }

    return [result, null]
}