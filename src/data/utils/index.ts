type FirebaseAuthErrorCode =
  | 'auth/email-already-in-use'
  | 'auth/invalid-email'
  | 'auth/operation-not-allowed'
  | 'auth/weak-password'
  | 'auth/user-disabled'
  | 'auth/user-not-found'
  | 'auth/wrong-password'

export function handleFirebaseAuthError(error: { code: string, message: string }) {
    switch (error.code as FirebaseAuthErrorCode) {
    case 'auth/email-already-in-use':
        throw new Error('Email ya utilizado por otro usuario.')
    case 'auth/invalid-email':
        throw new Error('Email no válido.')
    case 'auth/operation-not-allowed':
        throw new Error('Operación no permitida.')
    case 'auth/weak-password':
        throw new Error('La contraseña debe tener al menos 6 caracteres.')
    case 'auth/user-disabled':
        throw new Error('La cuenta ha sido suspendida temporalmente.')
    case 'auth/user-not-found':
        throw new Error('No existe ningún usuario asociado a este cuenta.')
    case 'auth/wrong-password':
        throw new Error('La contraseña es incorrecta.')

    default:
        throw new Error(error.message)
    }
}
