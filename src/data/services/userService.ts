import { PublicUserModel } from '@data/models/publicUserModel'
import { UserModel } from '@data/models/userModel'

export class UserService {

    async postUser(): Promise<void> {
        throw new Error('Method not implemented.')
    }

    async getUser(): Promise<UserModel> {
        return new UserModel({
            id: 'gk_1',
            firstName: 'Noemi',
            lastName: 'Martínez',
            picture: 'https://firebasestorage.googleapis.com/v0/b/social-network-geeksquare.appspot.com/o/users%2FfotoPerfil.jpg?alt=media&token=a3ed6a66-e1fa-4876-823e-f09677967196'
        })
    }

    async getUserById(id: string): Promise<PublicUserModel> {
        return new PublicUserModel({
            id: id,
            name: 'Nuna',
            username: 'nuna',
            picture: 'https://firebasestorage.googleapis.com/v0/b/social-network-geeksquare.appspot.com/o/users%2FfotoPerfil.jpg?alt=media&token=a3ed6a66-e1fa-4876-823e-f09677967196'
        })
    }
}