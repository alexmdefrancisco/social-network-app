// React imports
import { useState } from 'react'

// React Redux imports
import { useSelector } from 'react-redux'

// Firebase imports
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'

// Store imports
import { selectUserData } from '@ui/store/user/userSelectors'

// Types imports
import { PostProps } from '@ui/components/common/post/view'

export default function ViewModel() {

    const user = useSelector(selectUserData)

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [description, setDescription] = useState<string>()

    async function uploadImage(uri: string) {
        const response = await fetch(uri)
        const blob = await response.blob()
        const fileRef = storage().ref().child(`posts/${Math.random().toString(18).split('.')[1]}`)
        await fileRef.put(blob)

        return await fileRef.getDownloadURL()
    }

    async function uploadPost(uri: string) {
        setIsLoading(true)
        const imageUrl = await uploadImage(uri)

        const data: PostProps = {
            comments: [],
            description: description || '',
            imageUrl,
            userId: user.id,
            userPicture: user.picture,
            username: user.publicProfile.username
        }

        return await firestore().collection('posts').doc().set({
            createdAt: firestore.FieldValue.serverTimestamp(),
            ...data
        }).then(() => setIsLoading(false)).catch(() => setIsLoading(false))
    }

    return {
        isLoading,
        setDescription,
        uploadPost
    }
}