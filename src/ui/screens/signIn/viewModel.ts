// React imports
import { useState } from 'react'

// React Redux imports
import { useDispatch } from 'react-redux'

// Store imports
import type { AppDispatch } from '@ui/store'
import { signIn } from '@ui/store/user/actions/asyncActions'

export default function ViewModel() {
    const dispatch: AppDispatch = useDispatch()

    const [isChecked, setChecked] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    function handleLogin() {
        dispatch(signIn({ email, password }))
    }

    return {
        handleLogin,
        isChecked,
        setChecked,
        setEmail,
        setPassword
    }
}