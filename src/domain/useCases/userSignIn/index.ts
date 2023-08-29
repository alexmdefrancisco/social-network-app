// Data imports
import { FirebaseAuthService } from '@data/services/authService'

// Domain imports
import { UseCase } from '../useCase'
import { AuthService } from '@domain/services/auth'

export function userSignInUseCase(): UserSignInUseCase {
    const service = new FirebaseAuthService()
    return new UserSignInUseCase(service)
}

class UserSignInUseCase implements UseCase<string> {
    private authService: AuthService

    constructor(authService: AuthService) { this.authService = authService }

    async run(): Promise<string> {
        return await this.authService.getIdToken()
    }
}