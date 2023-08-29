// React imports
import React from 'react'

// React Native imports
import { View } from 'react-native'

// React Redux imports
import { useSelector } from 'react-redux'

// Config imports
import useCustomFonts from '@config/fonts'

// Store imports
import { selectIsLoggedIn } from '@ui/store/user/userSelectors'

// Navigations imports
import AppStack from '@ui/navigation/AppStack'
import AuthStack from '@ui/navigation/AuthStack'
import { StatusBar } from 'expo-status-bar'

// Constants imports
import theme from '@ui/assets/theme'

export default function RootNavigator() {

    const { fontsLoaded } = useCustomFonts()

    const isLoggedIn = useSelector(selectIsLoggedIn)

    if(!fontsLoaded) return null

    return (
        <View style={{ backgroundColor: theme.background, flex: 1 }}>
            {isLoggedIn ? <AppStack/> : <AuthStack/>}
            <StatusBar style={'auto'}/>
        </View>
    )
}