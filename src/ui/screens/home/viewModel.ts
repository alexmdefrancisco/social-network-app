// React imports
import { useEffect, useState } from 'react'

// Firebase imports
import firestore from '@react-native-firebase/firestore'

// Components imports
import { PostProps } from '@ui/components/common/post/view'

export default function ViewModel() {
    const [data, setData] = useState<PostProps[] | undefined>()

    async function getData() {
        const snapshot = (await firestore().collection('posts').get()).docs

        const data: PostProps[] = snapshot.map((item) => {
            const data = item.data()
            return { comments: data.comments, description: data.description, imageUrl: data.imageUrl }
        })

        setData(data)
    }

    useEffect(() => {
        getData()
    }, [])

    return {
        data
    }
}