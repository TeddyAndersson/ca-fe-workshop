
import { buildAuthenticateUserUseCase, buildIsUserAuthorizedUseCase } from "@src/core/application/use-cases/user";
import { buildUserJWTRepository } from "@src/infrastructure/auth/UserAuth.repository";
import { buildAuthMiddleware } from "@src/interface/middleware/auth.middleware";
import { buildJwtDecrypter } from "@src/infrastructure/crypto/jwt-decrypt.crypto";
import env from "@src/env";


const validateScopes = (scopes: string[], validScopes: string[]): boolean => {
  if (validScopes.every(e => scopes.includes(e))) {
      return true;
  }
  return false;
}

const userRepository = buildUserJWTRepository({validateScopes, decrypt: buildJwtDecrypter(env.JWT_SECRET)})
const authenticateUser = buildAuthenticateUserUseCase({userRepository})
const isUserAuthorized = buildIsUserAuthorizedUseCase({userRepository})

export const auth = (scopes: string[]) => buildAuthMiddleware({
  scopes,
  authenticateUser, 
  isUserAuthorized
})