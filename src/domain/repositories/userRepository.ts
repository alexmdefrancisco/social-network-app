import { PublicUser } from '@domain/entities/PublicUser'
import { User } from '@domain/entities/User'

export interface UserRepository {
    create(user: User): Promise<User>
    getUser(): Promise<User>
    postUser(user: Partial<User>): Promise<User | null>
    findById(id: string): Promise<PublicUser | null>
    update(user: Partial<User>): Promise<User | null>
    delete(id: string): Promise<boolean>
}