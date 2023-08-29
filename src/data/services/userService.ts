import { PublicUserModel } from '@data/models/publicUserModel'
import { UserModel } from '@data/models/userModel'

export class UserService {

    async postUser(): Promise<void> {
        console.log('posting')
    }

    async getUser(): Promise<UserModel> {
        return new UserModel({
            id: 'invite_1',
            firstName: 'Maria',
            lastName: 'Martí',
            picture: 'https://i.pinimg.com/564x/85/41/7d/85417d8c560c5caf13c3ef6ea9a6ef0a.jpg'
        })
    }

    async getUserById(id: string): Promise<PublicUserModel> {
        return new PublicUserModel({
            id: id,
            name: 'Lois Meira',
            username: 'loismeira',
            picture: 'https://firebasestorage.googleapis.com/v0/b/invitemeapptest.appspot.com/o/photos%2Fusers%2F7N3xTwtEk3ROj61YCl93sLDmdcR2%2FT7Okwc?alt=media&token=796df7d6-2a00-4f2b-980c-4155db5ec37c'
        })
    }
}