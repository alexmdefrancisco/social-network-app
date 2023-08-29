// Data imports
import { UserRepositoryImpl } from '@data/repositories/userRepository'
import { UserService } from '@data/services/userService'

// Domain imports
import { User } from '@domain/entities/User'
import { UseCase } from '@domain/useCases/useCase'
import { UserRepository } from '@domain/repositories/userRepository'

export function getUserUseCase(): GetUserUseCase {
    const service = new UserService()
    const repository = new UserRepositoryImpl(service)
    return new GetUserUseCase(repository)
}

class GetUserUseCase implements UseCase<User> {
    private repository: UserRepository

    constructor(repository: UserRepository) { this.repository = repository }

    async run(): Promise<User> {
        return await this.repository.getUser()
    }
}