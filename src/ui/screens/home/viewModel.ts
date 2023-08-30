// React imports
import { useEffect, useState } from 'react'

// Firebase imports
import firestore from '@react-native-firebase/firestore'

// Components imports
import { PostProps } from '@ui/components/common/post/view'

export default function ViewModel() {
    const [data, setData] = useState<PostProps[] | undefined>()

    async function subscribeToPosts() {
        firestore().collection('posts').orderBy('createdAt', 'desc').onSnapshot((snapshot) => {

            const data: PostProps[] = snapshot.docs.map((item) => {
                const data = item.data()
                return { comments: data.comments, description: data.description, imageUrl: data.imageUrl }
            })

            setData(data)
        })
    }

    useEffect(() => {
        subscribeToPosts()
    }, [])

    return {
        data
    }
}