// React imports
import React from 'react'

// React Native imports
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

// Expo imports
import { Image } from 'expo-image'

type Message = {
    message: string,
    username: string
}

export interface PostProps {
    description: string,
    imageUrl: string
    comments: Array<Message>,
    userId: string,
    username: string,
    userPicture: string
}

export default function Post({ comments, description, imageUrl, userPicture, username }: PostProps) {

    const { height } = Dimensions.get('window')

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image contentFit={'cover'} source={userPicture} style={styles.picture}/>
                <Text style={styles.text}>{username}</Text>
            </View>
            <Image contentFit={'cover'} source={imageUrl} style={[styles.image, { height: height/3 }]}/>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.repliesContainer}>
                <FlatList
                    data={comments}
                    ListFooterComponent={() => (
                        <TouchableOpacity>
                            <Text style={styles.footerText}>{'Ver los 4 comentarios'}</Text>
                        </TouchableOpacity>
                    )}
                    renderItem={({item}) => (
                        <Text style={styles.username}>{item.username}{' '}<Text style={styles.reply}>{item.message}</Text></Text>
                    )}
                    scrollEnabled={false}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    description: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        marginHorizontal: '5%',
        marginTop: '3%'
    },
    footerText: {
        color: '#76777a',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        marginTop: '1%'
    },
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: '4%',
        paddingVertical: '3%'
    },
    image: {
        width: '100%'
    },
    picture: {
        borderRadius: 16,
        height: 32,
        width: 32
    },
    repliesContainer: {
        marginBottom: '3%',
        marginLeft: '5%'
    },
    reply: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12
    },
    text: {
        color: '#000000',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        marginLeft: 6
    },
    username: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        marginTop: '1%'
    }
})