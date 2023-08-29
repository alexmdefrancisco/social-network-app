// Domain imports
import { UserObject } from '@domain/entities/User'

// Store imports
import { RootState } from '@ui/store/rootReducer'

export const selectIsLoggedIn = (state: RootState): boolean => state.user.isLoggedIn
export const selectUserData = (state: RootState): UserObject | object => state.user.userObject