// React imports
import { useState } from 'react'

// React Redux imports
import { useDispatch } from 'react-redux'

// Store imports
import type { AppDispatch } from '@ui/store'
import { postUser, signUp } from '@ui/store/user/actions/asyncActions'

// Types imports
import type { AuthStackProps } from '@ui/navigation/AuthStack'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

type ViewModelProps = {
    navigation: NativeStackNavigationProp<AuthStackProps, 'SignUp'>
}

export default function ViewModel({ navigation }: ViewModelProps) {

    const dispatch: AppDispatch = useDispatch()

    const [isChecked, setChecked] = useState<boolean>(false)
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    async function handleLogin() {
        try {
            await dispatch(signUp({ email, password })).unwrap()
            await dispatch(postUser({ firstName, lastName }))
        } catch(e) {
            navigation.navigate('Modal')
        }
    }

    return {
        handleLogin,
        isChecked,
        setChecked,
        setEmail,
        setFirstName,
        setLastName,
        setPassword
    }
}