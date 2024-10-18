import { User } from "@src/core/domain/entities/User";
import { UnauthorizedError } from "../exceptions";

export type Decrypt = (token: string) => Promise<[User| null, UnauthorizedError | null]>;