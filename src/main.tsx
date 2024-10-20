import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './presentation';
import { buildTodoController } from './interface/controllers/todo.controller.ts';

// styles
import './presentation/styles/globals.css';

import {
  buildAddTodoUseCase,
  buildDeleteTodoUseCase,
  buildFindTodoUseCase,
  buildListTodosUseCase,
  buildUpdateTodoUseCase,
} from './core/application/use-cases/todo.ts';
import { TodoServiceProvider } from './presentation/context/TodoServiceContext.ts';
import { buildInMemoryTodoRepository } from './infrastructure/api/InMemoryTodo.repository.ts';

const todoRepository = buildInMemoryTodoRepository();
const addTodoUseCase = buildAddTodoUseCase({
  repositories: { todoRepository },
});
const findTodoUseCase = buildFindTodoUseCase({
  repositories: { todoRepository },
});
const listTodoUseCase = buildListTodosUseCase({
  repositories: { todoRepository },
});
const deleteTodoUseCase = buildDeleteTodoUseCase({
  repositories: { todoRepository },
});
const updateTodoUseCase = buildUpdateTodoUseCase({
  repositories: { todoRepository },
});
const todoController = buildTodoController({
  addTodo: addTodoUseCase,
  getTodo: findTodoUseCase,
  listTodos: listTodoUseCase,
  deleteTodo: deleteTodoUseCase,
  updateTodo: updateTodoUseCase,
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoServiceProvider value={todoController}>
      <App />
    </TodoServiceProvider>
  </StrictMode>
);
