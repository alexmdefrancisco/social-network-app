// Data imports
import { FirebaseAuthService } from '@data/services/authService'

// Domain imports
import { AuthService } from '@domain/services/auth'

export function userSignInUseCase(): UserSignInUseCase {
    const service = new FirebaseAuthService()
    return new UserSignInUseCase(service)
}

class UserSignInUseCase {
    private authService: AuthService

    constructor(authService: AuthService) { this.authService = authService }

    async run(email: string, password: string): Promise<void> {
        return await this.authService.signIn(email, password)
    }
}