// React imports
import React from 'react'

// React Native imports
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screen imports
import SignUpScreen from '@ui/screens/signUp'

const Stack = createNativeStackNavigator()

export default function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen component={SignUpScreen} name='SignUp' />
        </Stack.Navigator>
    )
}