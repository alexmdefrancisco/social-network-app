// React imports
import React from 'react'

// React Native imports
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

// Expo imports
import { Image } from 'expo-image'

// Styles imports
import Content from '@ui/components/styles/content'

// Components imports
import type { AppStackProps } from '@ui/navigation/AppStack'
import Post from '@ui/components/common/post'

type HomeScreenProps = NativeStackScreenProps<AppStackProps, 'Home'>

export default function HomeScreen({ navigation }: HomeScreenProps) {

    const navigateTo = navigation.navigate

    return(
        <Content>
            <View style={styles.header}>
                <View style={styles.headerContainer}>
                    <Image contentFit={'contain'} source={require('@ui/assets/images/geeklogo.png')} style={styles.logo}/>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity onPress={() => navigateTo('NewPostImage')}>
                            <Image contentFit={'contain'} source={require('@ui/assets/images/addpost.png')} style={styles.icon}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigateTo('Profile')}>
                            <Image contentFit={'contain'} source={require('@ui/assets/images/profile.png')} style={styles.icon}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.separator}/>
            </View>
            <FlatList
                data={[1, 2, 3, 4]}
                renderItem={() => <Post/>}
                style={{ width: '100%' }}
            />
        </Content>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        width: '100%'
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
        width: '100%'
    },
    icon: {
        height: 30,
        width: 30
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 74
    },
    logo: {
        height: 30,
        width: 85
    },
    separator: {
        backgroundColor: '#f0f0f4',
        height: 2,
        marginTop: '2%',
        width: '100%'
    }
})