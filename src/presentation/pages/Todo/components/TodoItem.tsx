import { Button } from '@/presentation/components/button';

interface TodoItemProps {
  id: string;
  name: string;
  onDelete: (id: string) => void;
}

export default function TodoItem({ id, name, onDelete }: TodoItemProps) {
  return (
    <div
      className="flex space-x-2 justify-items-center items-center bg-slate-200 rounded-md p-4"
      key={id}
    >
      <h3 className="flex-1 font-bold text-lg">{name}</h3>
      <Button onClick={() => onDelete(id)}>Delete</Button>
    </div>
  );
}
