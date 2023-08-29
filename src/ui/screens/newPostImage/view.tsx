// React imports
import React from 'react'

// React Native imports
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

// Expo imports
import { Image } from 'expo-image'

// Styles imports
import Content from '@ui/components/styles/content'
import type { AppStackProps } from '@ui/navigation/AppStack'

type NewPostImageScreenProps = NativeStackScreenProps<AppStackProps, 'NewPostImage'>

export default function NewPostImageScreen({ navigation }: NewPostImageScreenProps) {

    const goBack = navigation.goBack
    const navigateTo = navigation.navigate

    return(
        <Content>
            <View style={styles.header}>
                <View style={styles.arrowContainer}>
                    <TouchableOpacity style={styles.arrowContainer} onPress={() => goBack()}>
                        <Image contentFit={'cover'} source={require('@ui/assets/icons/cross.png')} style={styles.arrow}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{'Nueva publicación'}</Text>
                </View>
                <View style={styles.textContainer}>
                    <TouchableOpacity onPress={() => navigateTo('NewPostDescription')}>
                        <Text style={styles.text}>{'Siguiente'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.separator}/>
            <View style={styles.pickerBackground}>
                <TouchableOpacity>
                    <Image contentFit={'cover'} source={require('@ui/assets/icons/camera.png')} style={styles.camera}></Image>
                </TouchableOpacity>
            </View>
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
    camera: {
        borderRadius: 28,
        height: 56,
        width: 56
    },
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '3%',
        width: '100%'
    },
    pickerBackground: {
        alignItems: 'center',
        backgroundColor: '#f0f0f4',
        height: '40%',
        justifyContent: 'center',
        width: '77%'
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
    title: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14
    },
    titleContainer: {
        alignItems: 'center',
        width: '40%'
    }
})