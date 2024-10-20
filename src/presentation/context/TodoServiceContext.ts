import React from "react";
import { TodoController } from "../../interface/controllers/todo.controller";

const TodoServiceContext = React.createContext<
    TodoController | undefined
>(undefined);
export const TodoServiceProvider = TodoServiceContext.Provider;

export const useTodoService = () => {
  const todoService = React.useContext(TodoServiceContext);

  if (!todoService) {
    throw new Error(
      "useTodoService must be used within a AccountServiceProvider",
    );
  }
  return todoService;
};