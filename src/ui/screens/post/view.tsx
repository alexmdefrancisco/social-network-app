// React imports
import React from 'react'

// React Native imports
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

// Expo imports
import { Image } from 'expo-image'

// View Model imports
import useViewModel from './viewModel'

// Styles imports
import Content from '@ui/components/styles/content'

// Components imports
import Post from '@ui/components/common/post'
import type { AppStackProps } from '@ui/navigation/AppStack'

type PostScreenProps = NativeStackScreenProps<AppStackProps, 'Post'>

export default function PostScreen({ navigation, route }: PostScreenProps) {

    const postId = route.params.postId

    const goBack = navigation.goBack

    const { post } = useViewModel({ postId })

    return(
        <Content>
            <View style={styles.header}>
                <TouchableOpacity style={styles.arrowContainer} onPress={() => goBack()}>
                    <Image contentFit={'cover'} source={require('@ui/assets/icons/leftArrow.png')} style={styles.arrow}></Image>
                </TouchableOpacity>
                <Text style={styles.title}>{'PUBLICACIÓN'}</Text>
                <Text style={styles.username}>{post?.username}</Text>
                <View style={styles.separator}/>
            </View>
            <Post {...post!} />
        </Content>
    )
}

const styles = StyleSheet.create({
    arrow: {
        borderRadius: 14,
        height: 28,
        width: 28
    },
    arrowContainer: {
        left: '5%',
        position: 'absolute'
    },
    header: {
        alignItems: 'center',
        marginBottom: '3%',
        marginTop: '3%',
        width: '100%'
    },
    separator: {
        backgroundColor: '#f0f0f4',
        height: 2,
        marginTop: '2%',
        width: '100%'
    },
    title: {
        color: '#76777a',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14
    },
    username: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14
    }
})