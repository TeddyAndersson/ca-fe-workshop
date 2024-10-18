import { UseCaseResponse } from "@src/core/domain/use-cases/types"
import { UserRepository } from "../interfaces/repositories/user.repository"
import { User } from "@src/core/domain/entities/User"

export type AuthenticateUserUseCase = (token: string) => UseCaseResponse<User | null>
export const buildAuthenticateUserUseCase = (deps: {
      userRepository: UserRepository
    }): AuthenticateUserUseCase => async (token) => {
      const { userRepository } = deps;
      
      const [result, repositoryError] = await userRepository.authenticate(token)
      console.log(result)
      if (!result) {
          return [null, repositoryError]
      }
  
      return [result, null]
  }

export type IsUserAuthorizedUseCase = (scopes: string[], validScopes: string[]) => UseCaseResponse<Boolean | null>
export const buildIsUserAuthorizedUseCase = (deps: {
    userRepository: UserRepository
}): IsUserAuthorizedUseCase => async (scopes, validScopes) => {
    const { userRepository } = deps;
    const [result, error] = await userRepository.authorize(scopes, validScopes)
    if (!result) {
        return [null, error]
    }
    // Implementation goes here
    return [result, null]
}