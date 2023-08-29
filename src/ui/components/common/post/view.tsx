// React imports
import React from 'react'

// React Native imports
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

// Expo imports
import { Image } from 'expo-image'

const DATA = [
    {
        message: '🔥🌙⭐️',
        username: 'lola'
    },
    {
        message: 'que suerte que tengas este!!',
        username: 'manuu3'
    }
]

type Message = {
    message: string,
    username: string
}

interface PostProps {
    comments: Array<Message>,
    description: string
}

export default function Post({ comments, description }: PostProps) {

    const { height } = Dimensions.get('window')

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image contentFit={'cover'} source={require('@ui/assets/images/profileImage.png')} style={styles.picture}/>
                <Text style={styles.text}>{'nuna'}</Text>
            </View>
            <Image contentFit={'cover'} source={require('@ui/assets/images/postImage.png')} style={[styles.image, { height: height/3 }]}/>
            <Text style={styles.description}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}</Text>
            <View style={styles.repliesContainer}>
                <FlatList
                    data={DATA}
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