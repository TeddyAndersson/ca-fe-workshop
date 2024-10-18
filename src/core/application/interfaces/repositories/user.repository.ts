import { User } from "@src/core/domain/entities/User"

export type UserRepository = {
    authenticate: (token: string) => Promise<[User | null, Error | null]>
    authorize: (scopes: string[], validScopes: string[]) => Promise<[boolean | null, Error | null]>
}