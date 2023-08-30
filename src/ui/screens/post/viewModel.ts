// React imports
import { useEffect, useState } from 'react'

// Firebase imports
import firestore from '@react-native-firebase/firestore'

// Components imports
import type { PostProps } from '@ui/components/common/post/view'

export default function ViewModel({ postId }: { postId: string }) {

    const [post, setPost] = useState<PostProps>()

    useEffect(() => {
        (async function () {
            const post = (await firestore().doc(`posts/${postId}`).get()).data()
            setPost(post)
        })()
    }, [postId])

    return {
        post
    }

}