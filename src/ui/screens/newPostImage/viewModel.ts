// React imports
import { useState } from 'react'

// Expo imports
import * as ImagePicker from 'expo-image-picker'

export default function ViewModel() {

    const [image, setImage] = useState<string>('')

    async function pickImage() {
        // No permissions request is necessary for launching the image library
        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1
        })

        console.log(result)

        if (!result.canceled) {
            setImage(result.assets[0].uri)
        }
    }

    return {
        image,
        pickImage
    }
}