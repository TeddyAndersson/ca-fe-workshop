import { AddTodo, DeleteTodo, FindManyTodos, FindTodo, UpdateTodo } from "../../domain/use-cases/todo";
import { TodoRepository } from "../interfaces/repositories/todo.repository";
import { Todo } from "../../domain/entities/Todo";

export const buildAddTodoUseCase = (
  deps: {
    repositories: {
      todoRepository: TodoRepository
    }
  }): AddTodo  => async (todo: Todo) => {
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
  }): FindTodo  => async (id: string) => {
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
  }): FindManyTodos  => async ({
    byPriority,
    byOrder
  }) => {
    const { repositories } = deps;
    const { todoRepository } = repositories;

    const [result, repositoryError] = await todoRepository.findMany({byPriority, byOrder})
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
  }): DeleteTodo  => async (id: string) => {
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
  }): UpdateTodo  => async (todo: Todo) => {
    const { repositories } = deps;
    const { todoRepository } = repositories;

    const [result, repositoryError] = await todoRepository.update(todo)
    if (!result) {
      return [null, repositoryError]
    }

    return [result, null]
}