import { AuthService } from '@domain/services/auth'

// Firebase imports
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'

export class FirebaseAuthService implements AuthService {

    appleSignIn(): Promise<void> {
        throw new Error('Method not implemented.')
    }

    googleSignIn(): Promise<void> {
        throw new Error('Method not implemented.')
    }

    changeUsername(username: string): Promise<void> {
        console.log(username)
        throw new Error('Method not implemented.')
    }

    async createAccount(email: string, password: string): Promise<void> {
        try {
            await auth().createUserWithEmailAndPassword(email, password)
            const user = auth().currentUser
            console.log(user)
            // return user
        } catch(e) {
            console.warn(e)
            // return null
        }
    }

    async getIdToken(): Promise<string> {
        await new Promise(resolve => setTimeout(resolve, 500))
        return 'userToken123'
    }

    logout(): Promise<void> {
        throw new Error('Method not implemented.')
    }

}