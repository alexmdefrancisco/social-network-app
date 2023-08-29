import { User } from '@domain/entities/User'
import { UserRepository } from '@domain/repositories/userRepository'
import { UserService } from '@data/services/userService'
import { PublicUser } from '@domain/entities/PublicUser'

export class UserRepositoryImpl implements UserRepository {

    private service: UserService

    constructor(service: UserService) { this.service = service }

    async create(user: User): Promise<User> {
        throw new Error('Method not implemented.')
    }

    async getUser(): Promise<User> {
        const data = await this.service.getUser()

        return data.toDomain()
    }

    async findById(id: string): Promise<PublicUser | null> {
        const data = await this.service.getUserById(id)

        return data.toDomain()
    }

    async update(id: string, user: Partial<User>): Promise<User | null> {
        throw new Error('Method not implemented.')
    }

    async delete(id: string): Promise<boolean> {
        throw new Error('Method not implemented.')
    }

}