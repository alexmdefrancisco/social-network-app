// React imports
import React, { Dispatch, SetStateAction } from 'react'

// React Native imports
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

// View Model imports
import useViewModel from './viewModel'

// Styles imports
import Content from '@ui/components/styles/content'

interface FormBoxProps {
    onChangeText?: Dispatch<SetStateAction<string>>
    placeholder: string
    title: string,
}

function FormBox({ onChangeText, placeholder, title }: FormBoxProps) {
    return (
        <>
            <Text style={styles.formTitle}>
                {title}
            </Text>
            <TextInput placeholder={placeholder} placeholderTextColor={'#aaabae'} style={styles.formText} onChangeText={onChangeText}/>
        </>
    )
}

export default function SignUpScreen() {

    const viewModel = useViewModel()

    const setEmail = viewModel.setEmail
    const setPassword = viewModel.setPassword
    const handleLogin = viewModel.handleLogin

    return(
        <Content>
            <Text style={styles.titleText}>
                {'¡Bienvenido! 👋'}
            </Text>
            <View style={{ alignItems: 'flex-start', flex: 1, paddingHorizontal: '5%', width: '100%' }}>
                <FormBox placeholder={'Nombre'} title={'Nombre'} />
                <FormBox placeholder={'Apellidos'} title={'Apellidos'} />
                <FormBox placeholder={'ejemplo@gmail.com'} title={'Email'} onChangeText={setEmail}/>
                <FormBox placeholder={'mínimo 8 carácteres'} title={'Contraseña'} onChangeText={setPassword}/>
                <View style={styles.termsContainer}>
                    <View style={{ backgroundColor: '#000000', borderRadius: 10, height: 20, width: 20 }}/>
                    <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 12, marginLeft: '2%' }}>
                        {'Acepto los '}
                        <Text style={{ fontFamily: 'Montserrat-SemiBold', fontSize: 12 }}>{'Términos y condiciones '}</Text>
                        {'y la '}
                        <Text style={{ fontFamily: 'Montserrat-SemiBold', fontSize: 12 }}>{'Política de privacidad'}</Text>
                    </Text>
                </View>
                <TouchableOpacity style={styles.continue} onPress={() => handleLogin()}>
                    <Text style={styles.signUpText}>{'Crear Cuenta'}</Text>
                </TouchableOpacity>
                <View style={styles.signInContainer}>
                    <Text style={[styles.signInText, { fontFamily: 'Montserrat-Regular' }]}>
                        {'¿Ya tienes cuenta? '}
                        <Text style={[styles.signInText, { fontFamily: 'Montserrat-SemiBold' }]}>{'Iniciar Sesión'}</Text>
                    </Text>
                </View>
            </View>
        </Content>
    )
}

const styles = StyleSheet.create({
    continue: {
        alignItems: 'center',
        backgroundColor: '#4147d5',
        borderRadius: 100,
        paddingVertical: 16,
        width: '100%'
    },
    formText: {
        borderColor: '#f0f0f4',
        borderRadius: 6,
        borderWidth: 1,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        height: 51,
        width: '100%'
    },
    formTitle: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12
    },
    signInContainer: {
        alignItems: 'center',
        marginTop: '5%',
        width: '100%'
    },
    signInText: {
        color: '#00000085',
        fontSize: 12
    },
    signUpText: {
        color: '#ffffff',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16
    },
    termsContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: '5%',
        width: '100%'
    },
    titleText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 22,
        marginTop: '5%'
    }
})