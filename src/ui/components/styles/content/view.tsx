// React imports
import React from 'react'

// React Native imports
import { KeyboardAvoidingView, StyleProp, StyleSheet, View, ViewStyle } from 'react-native'

// View Model imports
import useViewModel from './viewModel'

// Constants imports
import theme from '@ui/assets/theme'

interface ContentProps {
    children: React.ReactNode
    style?: StyleProp<ViewStyle>
}

export default function Content({ children, style }: ContentProps) {

    const { insets, paddingBottom } = useViewModel()

    const safeStyle = { paddingBottom: paddingBottom, paddingLeft: insets.left, paddingRight: insets.right, paddingTop: insets.top }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <View style={[styles.container, {...safeStyle, backgroundColor: theme.background}, style]}>
                {children}
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1
    }
})