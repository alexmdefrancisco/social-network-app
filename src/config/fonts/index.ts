import { useFonts } from 'expo-font'

export default function useCustomFonts() {
    const [fontsLoaded] = useFonts({
        'Montserrat-Regular': require('../../ui/assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-SemiBold': require('../../ui/assets/fonts/Montserrat-SemiBold.ttf')
    })

    return {
        fontsLoaded
    }
}