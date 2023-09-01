// React imports
import { useEffect, useState } from 'react'

// React Redux imports
import { useSelector } from 'react-redux'

// Firebase imports
import firestore from '@react-native-firebase/firestore'

// Store imports
import { selectUserData } from '@ui/store/user/userSelectors'

// Components imports
import { PostProps } from '@ui/components/common/post/view'

export default function ViewModel() {

    // const user = useSelector(selectUserData)

    const [data, setData] = useState<PostProps[]>([])

    async function subscribeToPosts() {
        firestore().collection('posts').orderBy('createdAt', 'desc').onSnapshot((snapshot) => {

            const data: PostProps[] = snapshot.docs.map((item) => {
                const data = item.data() as PostProps
                return { ...data, postId: item.id }
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