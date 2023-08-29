// import { UserCredential } from '@data/models/examples/useCredential'

export interface AuthService {
    getIdToken(): Promise<string>
    appleSignIn(): Promise<void> // UserCredential
    googleSignIn(): Promise<void> // UserCredential
    createAccount(email: string, password: string): Promise<void>
    changeUsername(username: string): Promise<void>
    logout(): Promise<void>
}