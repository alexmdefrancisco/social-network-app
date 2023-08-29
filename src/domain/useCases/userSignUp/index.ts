// Data imports
import { FirebaseAuthService } from '@data/services/authService'

// Domain imports
import { AuthService } from '@domain/services/auth'

export function userSignUpUseCase(): UserSignUpUseCase {
    const service = new FirebaseAuthService()
    return new UserSignUpUseCase(service)
}

class UserSignUpUseCase {
    private authService: AuthService

    constructor(authService: AuthService) { this.authService = authService }

    async run(email: string, password: string): Promise<void> {
        return await this.authService.createAccount(email, password)
    }
}