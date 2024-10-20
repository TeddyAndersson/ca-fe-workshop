// Core imports
import { Todo } from '../../../core/domain/entities/Todo';

// Types
import { UseTodo } from '../../hooks/useTodo';

// Components
import AddTodoForm from './components/AddTodoForm';
import TodoItem from './components/TodoItem';

interface TodoPageProps {
  useTodo: UseTodo;
}

const TodoPage = ({ useTodo }: TodoPageProps) => {
  const { todos, onAdd, onDelete } = useTodo();

  const handleAddTodoFormSubmit = (values: { name: string }) => {
    const todo: Omit<Todo, 'id' | 'completed'> = values;
    onAdd(todo);
  };

  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-12 md:flex">
      <header className="flex items-center justify-between space-y-2">
        <section>
          <h2 className="text-2xl font-bold tracking-tight">Welcome</h2>
          <p className="text-muted-foreground">
            Here&apos;s a todo application implemented with Clean Architecture
            principels!
          </p>
        </section>
      </header>
      <AddTodoForm onSubmit={handleAddTodoFormSubmit} />
      <section className="flex flex-col space-y-4">
        {!todos.length && <EmptyTodo />}
        {todos &&
          todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                id={todo.id}
                name={todo.name}
                onDelete={(id: string) => onDelete(id)}
              />
            );
          })}
      </section>
    </div>
  );
};

const EmptyTodo = () => {
  return (
    <div className="flex flex-col items-center justify-start bg-slate-100 rounded-md p-4">
      <p className="text-lg font-bold">No todos here yet</p>
      <p className="text-muted-foreground">
        Add some todos to this list by using the form above!
      </p>
    </div>
  );
};

export default TodoPage;
