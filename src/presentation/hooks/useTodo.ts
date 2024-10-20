import { useEffect, useState } from "react";
import { Todo } from "../../core/domain/entities/Todo";
import { useTodoService } from "../context/TodoServiceContext";



export function useTodo() {
    const service = useTodoService();
    const [todos, setTodos] = useState<Todo[]>([]);


    useEffect(() => { 
        const updateTodos = async () => {
            const result = await service.listTodos({});
            setTodos(result);
        }

        updateTodos();
    }, [])

    const onAdd = async (todo: Omit<Todo, 'id' | 'completed'>) => {
        const result = await service.addTodo({todo});
        setTodos((prevState) => [...prevState, result])
    }

    const onDelete = async (id: string) => {
        const result = await service.deleteTodo({ id })
        setTodos(prevState => prevState.filter(todo => todo.id!== result.id))
    }
  
    return { todos, onAdd, onDelete};
  }
  
  export type UseTodo = typeof useTodo