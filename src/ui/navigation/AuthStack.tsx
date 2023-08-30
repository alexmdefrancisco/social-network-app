// React imports
import React from 'react'

// React Native imports
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screen imports
import SignInScreen from '@ui/screens/signIn'
import SignUpScreen from '@ui/screens/signUp'

export type AuthStackProps = {
    SignUp: undefined,
    SignIn: undefined
}

const Stack = createNativeStackNavigator<AuthStackProps>()

export default function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen component={SignUpScreen} name='SignUp'/>
            <Stack.Screen component={SignInScreen} name='SignIn'/>
        </Stack.Navigator>
    )
}