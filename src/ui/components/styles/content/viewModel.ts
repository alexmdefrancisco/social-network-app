// React imports
import { useEffect, useState } from 'react'

// React Native imports
import { Keyboard, Platform } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function ViewModel() {

    const insets = useSafeAreaInsets()
    const [keyboardHeight, setKeyboardHeight] = useState(0)

    useEffect(() => {
        if (Platform.OS === 'ios') {
            const keyboardWillShowListener = Keyboard.addListener(
                'keyboardWillShow',
                (e) => setKeyboardHeight(e.endCoordinates.height)
            )
            const keyboardWillHideListener = Keyboard.addListener(
                'keyboardWillHide',
                () => setKeyboardHeight(0)
            )

            return () => {
                keyboardWillShowListener.remove()
                keyboardWillHideListener.remove()
            }
        }
    }, [])

    const paddingBottom = keyboardHeight === 0 ? insets.bottom : keyboardHeight

    return {
        insets,
        paddingBottom
    }

}