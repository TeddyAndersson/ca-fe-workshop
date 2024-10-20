import { Todo } from "../../../domain/entities/Todo";

export type TodoRepository = {
    add: (todo: Todo) => Promise<[Todo | null, Error | null]>
    update: (todo: Todo) => Promise<[Todo | null, Error | null]>
    find: (id: string) => Promise<[Todo | null, Error | null]>
    findMany: (query: {
        byPriority?: "low" | "medium" | "high";
        byOrder?: "asc" | "desc";
    }) => Promise<[Todo[] | null, Error | null]>
    delete: (id: string) => Promise<[Todo["id"] | null, Error | null]>
};