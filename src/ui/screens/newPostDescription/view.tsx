// React imports
import React from 'react'

// React Native imports
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

// Expo imports
import { Image } from 'expo-image'

// Styles imports
import Content from '@ui/components/styles/content'
import type { AppStackProps } from '@ui/navigation/AppStack'

type NewPostDescriptionScreenProps = NativeStackScreenProps<AppStackProps, 'NewPostDescription'>

export default function NewPostDescriptionScreen({ navigation }: NewPostDescriptionScreenProps) {

    const goBack = navigation.goBack
    const popToTop = navigation.popToTop

    return(
        <Content>
            <View style={styles.header}>
                <View style={styles.arrowContainer}>
                    <TouchableOpacity style={styles.arrowContainer} onPress={() => goBack()}>
                        <Image contentFit={'cover'} source={require('@ui/assets/icons/leftArrow.png')} style={styles.arrow}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{'Nueva publicación'}</Text>
                </View>
                <View style={styles.textContainer}>
                    <TouchableOpacity onPress={() => popToTop()}>
                        <Text style={styles.text}>{'Compartir'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.separator}/>
            <View style={styles.container}>
                <Image contentFit={'cover'} source={require('@ui/assets/images/postImage.png')} style={styles.picture}></Image>
                <TextInput
                    multiline
                    placeholder={'Escribe una descripción...'}
                    style={styles.textInput}
                />
            </View>
            <View style={styles.separator}/>
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
        alignItems: 'flex-start',
        paddingLeft: '4%',
        width: '30%'
    },
    container: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: '2%',
        width: '90%'
    },
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '3%',
        width: '100%'
    },
    picture: {
        height: 122,
        width: 110
    },
    separator: {
        backgroundColor: '#f0f0f4',
        height: 2,
        marginBottom: '4%',
        marginTop: '2%',
        width: '100%'
    },
    text: {
        color: '#4147d5',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16
    },
    textContainer: {
        alignItems: 'flex-end',
        paddingRight: '4%',
        width: '30%'
    },
    textInput: {
        flex: 1,
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        marginLeft: '3%'
    },
    title: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14
    },
    titleContainer: {
        alignItems: 'center',
        width: '40%'
    }
})