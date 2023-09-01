import { PublicUserModel } from '@data/models/publicUserModel'
import { User } from '@domain/entities/User'
import { UserModel } from '@data/models/userModel'

// Firebase imports
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

// Types imports
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'

export class UserService {

    async postUser(user: Partial<User>): Promise<UserModel> {
        const userId = this.getCurrentUserId()

        return await this.postUserData(userId, user)
    }

    async getUser(): Promise<UserModel> {
        const userId = this.getCurrentUserId()
        const user = await this.fetchUserData(userId)

        return this.mapToUserModel(userId, user)
    }

    async getUserById(id: string): Promise<PublicUserModel> {
        return new PublicUserModel({
            id: id,
            username: 'nuna',
            picture: 'https://firebasestorage.googleapis.com/v0/b/social-network-geeksquare.appspot.com/o/users%2FfotoPerfil.jpg?alt=media&token=a3ed6a66-e1fa-4876-823e-f09677967196'
        })
    }

    private getCurrentUserId(): string {
        const currentUser = auth().currentUser
        if (!currentUser)
            throw new Error('No user is currently logged in.')

        return currentUser.uid
    }

    private async fetchUserData(userId: string): Promise<FirebaseFirestoreTypes.DocumentData> {
        const userDocument = await firestore().doc(`users/${userId}`).get()

        if (!userDocument.exists)
            throw new Error(`No user found for ID ${userId}.`)

        const userData = userDocument.data()

        if (!userData)
            throw new Error('Document exists but no data was found.')

        return userData
    }

    private async postUserData(userId: string, user: Partial<User>): Promise<UserModel> {
        const data = {
            firstName: user.firstName || '',
            lastName: user.lastName || '',
            picture: 'https://firebasestorage.googleapis.com/v0/b/social-network-geeksquare.appspot.com/o/users%2Fpicture.png?alt=media&token=82694066-f232-44de-9eb8-c301581937cb'
        }

        await firestore().doc(`users/${userId}`).set(data, { merge: true })

        return new UserModel({
            id: userId,
            ...data
        })
    }

    private mapToUserModel(userId: string, user: FirebaseFirestoreTypes.DocumentData): UserModel {
        return new UserModel({
            id: userId,
            firstName: user.firstName,
            lastName: user.lastName,
            picture: user.picture
        })
    }
}