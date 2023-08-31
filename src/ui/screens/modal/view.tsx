// React import
import React from 'react'

// React Native imports
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

// View Model import
import useViewModel from './viewModel'

// Types imports
import type { AuthStackProps } from '@ui/navigation/AuthStack'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

type ModalScreenProps = {
    navigation: NativeStackNavigationProp<AuthStackProps, 'SignUp'>
}

export default function ModalScreen({ navigation }: ModalScreenProps) {

    const { error, handleError } = useViewModel()

    function handleGoBack() {
        handleError()
        navigation.goBack()
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{error}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => handleGoBack()}>
                        <Text style={styles.buttonText}>{'Cerrar'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#4147d5',
        borderRadius: 100,
        paddingVertical: 8,
        width: '100%'
    },
    buttonText: {
        color: '#ffffff',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14
    },
    container: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        flex: 1,
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        marginBottom: 5,
        textAlign: 'center'
    },
    textContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 5,
        height: '15%',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            height: 2,
            width: 0
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        width: '55%'
    }
})