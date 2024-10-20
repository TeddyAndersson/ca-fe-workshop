import { useForm } from 'react-hook-form';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/presentation/components/form';
import { Input } from '@/presentation/components/input';
import { Button } from '@/presentation/components/button';

interface AddTodoFormProps {
  onSubmit: (values: { name: string }) => void;
}

type AddTodoFormData = {
  name: string;
};

const AddTodoFormSchema: ZodType<AddTodoFormData> = z.object({
  name: z
    .string()
    .max(100, { message: 'The maximum length is 100 charachters' }),
});
export default function AddTodoForm({ onSubmit }: AddTodoFormProps) {
  const form = useForm<AddTodoFormData>({
    resolver: zodResolver(AddTodoFormSchema),
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Add a new Todo</FormLabel>
              <FormControl>
                <Input
                  placeholder="Write what you would like to do..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Add Todo</Button>
      </form>
    </Form>
  );
}
