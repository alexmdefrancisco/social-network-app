import React from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'

import { StoreProvider, store } from '@ui/store'
import RootNavigator from '@ui/navigation/RootNavigator'

export default function Main() {
    return (
        <StoreProvider store={store}>
            <SafeAreaProvider>
                <NavigationContainer>
                    <RootNavigator/>
                </NavigationContainer>
            </SafeAreaProvider>
        </StoreProvider>
    )
}