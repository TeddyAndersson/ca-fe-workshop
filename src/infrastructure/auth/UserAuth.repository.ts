import { Decrypt } from "@src/core/application/interfaces/crypto/decrypt";
import { UnauthorizedError } from "@src/core/application/interfaces/exceptions";
import { UserRepository } from "@src/core/application/interfaces/repositories/user.repository";

export const buildUserJWTRepository = ({
    validateScopes,
    decrypt
}: {
    validateScopes: (scopes: string[], validScopes: string[]) => boolean
    decrypt: Decrypt
}): UserRepository => ({
    authenticate: async (token) => {
        const [user, error] = await decrypt(token)
        if (error) {
            return [null, error]
        }
        return [user, null]
    },
    authorize: async (scopes, validScopes) => {
        if (!validateScopes(scopes, validScopes)) {
            return [false, new UnauthorizedError()];
        }
        return [true, null]
    }
}) 