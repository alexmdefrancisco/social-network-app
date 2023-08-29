import { PublicUser } from '@domain/entities/PublicUser'
import { User } from '@domain/entities/User'

export interface UserRepository {
    create(user: User): Promise<User>
    getUser(): Promise<User>
    findById(id: string): Promise<PublicUser | null>
    update(id: string, user: Partial<User>): Promise<User | null>
    delete(id: string): Promise<boolean>
}