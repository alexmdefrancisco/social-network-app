// Assets imports
import { lightTheme } from '@ui/assets/theme'

type Theme = typeof lightTheme

// Store imports
import { RootState } from '@ui/store/rootReducer'

export const selectCurrentTheme = (state: RootState): Theme => state.theme.currentTheme