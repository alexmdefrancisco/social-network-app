// React imports
import { useState } from 'react'

// Firebase imports
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'

export default function ViewModel() {

    const [description, setDescription] = useState<string>()

    async function uploadImage(uri: string) {
        const response = await fetch(uri)
        const blob = await response.blob()
        const fileRef = storage().ref().child(`posts/${Math.random().toString(18).split('.')[1]}`)
        await fileRef.put(blob)

        return await fileRef.getDownloadURL()
    }

    async function uploadPost(uri: string) {
        const imageUrl = await uploadImage(uri)

        return await firestore().collection('posts').doc().set({
            createdAt: firestore.FieldValue.serverTimestamp(),
            description,
            imageUrl
        })
    }

    return {
        setDescription,
        uploadPost
    }
}