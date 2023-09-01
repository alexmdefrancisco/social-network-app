// React imports
import React from 'react'

// React Native imports
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

// Expo imports
import { Image } from 'expo-image'

// View Model imports
import useViewModel from './viewModel'

// Styles imports
import Content from '@ui/components/styles/content'

// Types imports
import type { AppStackProps } from '@ui/navigation/AppStack'
import type { PostProps } from '@ui/components/common/post/view'

type ProfileScreenProps = NativeStackScreenProps<AppStackProps, 'Profile'>

export default function ProfileScreen({ navigation, route }: ProfileScreenProps) {

    const { width } = Dimensions.get('screen')

    const viewModel = useViewModel({ profilePicture: route.params.picture, userId: route.params.userId })

    const data = viewModel.data
    const user = viewModel.user
    const picture = viewModel.picture

    const navigateTo = navigation.navigate
    const goBack = navigation.goBack
    const pickPicture = viewModel.pickPicture

    const username = route.params.username || user.publicProfile.username

    function renderItem({ item }: { item: PostProps }) {
        return(
            <TouchableOpacity onPress={() => navigateTo('Post', { postId: item.postId })}>
                <Image contentFit={'cover'} source={item.imageUrl} style={{ borderColor: '#ffffff', borderWidth: 1, height: width/3, width: width/3 }}/>
            </TouchableOpacity>
        )
    }

    return(
        <Content>
            <View style={styles.header}>
                <TouchableOpacity style={styles.arrowContainer} onPress={() => goBack()}>
                    <Image contentFit={'cover'} source={require('@ui/assets/icons/leftArrow.png')} style={styles.arrow}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => pickPicture()}>
                    <Image contentFit={'cover'} source={picture} style={styles.image}/>
                </TouchableOpacity>
                <Text style={styles.username}>{username}</Text>
            </View>
            <FlatList
                data={data}
                numColumns={3}
                renderItem={renderItem}
                style={{ width: '100%' }}
            />
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
        width: '100%'
    },
    image: {
        borderRadius: 45,
        height: 90,
        width: 90
    },
    username: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 21,
        marginTop: 10
    }
})