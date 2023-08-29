// React imports
import { useState } from 'react'

// React Redux imports
import { useDispatch } from 'react-redux'

// Store imports
import type { AppDispatch } from '@ui/store'
import { signUp } from '@ui/store/user/actions/asyncActions'

export default function ViewModel() {
    const dispatch: AppDispatch = useDispatch()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    function handleLogin() {
        dispatch(signUp({ email, password }))
    }

    return {
        handleLogin,
        setEmail,
        setPassword
    }
}