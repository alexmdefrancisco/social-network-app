// React imports
import { useEffect, useState } from 'react'

// React Redux imports
import { useSelector } from 'react-redux'

// Expo imports
import * as ImagePicker from 'expo-image-picker'

// Firebase imports
import firestore from '@react-native-firebase/firestore'

// Store imports
import { selectUserData } from '@ui/store/user/userSelectors'

// Components imports
import { PostProps } from '@ui/components/common/post/view'

export default function ViewModel({ profilePicture, userId: uid }: { profilePicture?: string, userId?: string }) {

    const user = useSelector(selectUserData)
    const userId = uid || user.id

    const [data, setData] = useState<PostProps[]>([])
    const [picture, setPicture] = useState<string>(profilePicture || user.picture)

    async function subscribeToPosts() {
        firestore().collection('posts').where('userId', '==', userId).onSnapshot((snapshot) => {

            const data: PostProps[] = snapshot?.docs.map((item) => {
                const data = item.data() as PostProps
                return { ...data, postId: item.id }
            })

            setData(data)
        })
    }

    async function pickPicture() {
        // No permissions request is necessary for launching the image library
        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 0.5
        })

        if (!result.canceled) {
            setPicture(result.assets[0].uri)
            await firestore().doc(`users/${userId}`).set({ picture: result.assets[0].uri }, { merge: true })
        }
    }

    useEffect(() => {
        subscribeToPosts()
    }, [])

    return {
        data,
        pickPicture,
        picture,
        user
    }
}