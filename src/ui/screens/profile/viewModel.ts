// React Redux imports
import { useSelector } from 'react-redux'

// Store imports
import { selectUserData } from '@ui/store/user/userSelectors'

export default function ViewModel() {

    const user = useSelector(selectUserData)

    return {
        user
    }
}