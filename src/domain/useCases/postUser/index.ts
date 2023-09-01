// Data imports
import { UserRepositoryImpl } from '@data/repositories/userRepository'
import { UserService } from '@data/services/userService'

// Domain imports
import { User } from '@domain/entities/User'
import { UserRepository } from '@domain/repositories/userRepository'

export function postUserUseCase(): PostUserUseCase {
    const service = new UserService()
    const repository = new UserRepositoryImpl(service)
    return new PostUserUseCase(repository)
}

class PostUserUseCase {
    private repository: UserRepository

    constructor(repository: UserRepository) { this.repository = repository }

    async run(firstName: string, lastName: string): Promise<User | null> {
        return await this.repository.postUser({ firstName, lastName })
    }
}