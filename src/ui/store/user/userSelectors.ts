// Domain imports
import type { UserObject } from '@domain/entities/User'

// Store imports
import type { RootState } from '@ui/store/rootReducer'

export const selectError = (state: RootState): any => state.user.error
export const selectIsLoggedIn = (state: RootState): boolean => state.user.isLoggedIn
export const isLoading = (state: RootState): 'loading' | 'idle' | undefined => state.user.status
export const selectUserData = (state: RootState): UserObject => state.user.userObject