import { handleFirebaseAuthError } from '@data/utils'
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
        throw new Error('Method not implemented.')
    }

    async createAccount(email: string, password: string): Promise<void> {
        try {
            await auth().createUserWithEmailAndPassword(email, password)
        } catch(e: unknown) {
            if(e instanceof Error) handleFirebaseAuthError(e as unknown as { code: string, message: string })
            else throw new Error('Un error inesperado ha ocurrido')
        }
    }

    async signIn(email: string, password: string): Promise<void> {
        try {
            await auth().signInWithEmailAndPassword(email, password)
        } catch(e: unknown) {
            if(e instanceof Error) handleFirebaseAuthError(e as unknown as { code: string, message: string })
            else throw new Error('Un error inesperado ha ocurrido')
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