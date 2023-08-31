// React Redux imports
import { useDispatch, useSelector } from 'react-redux'

// Store imports
import { clearError } from '@ui/store/user/userSlice'
import { selectError } from '@ui/store/user/userSelectors'

// Types imports
import type { AppDispatch } from '@ui/store'

export default function ViewModel() {

    const dispatch: AppDispatch = useDispatch()

    const error = useSelector(selectError)

    function handleError() {
        dispatch(clearError())
    }

    return {
        error,
        handleError
    }
}