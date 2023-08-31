// React imports
import React from 'react'

// React Native imports
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

// Expo imports
import CheckBox from 'expo-checkbox'

// View Model imports
import useViewModel from './viewModel'

// Styles imports
import Content from '@ui/components/styles/content'

// Components imports
import type { AuthStackProps } from '@ui/navigation/AuthStack'
import FormBox from '@ui/components/common/formBox'

type SignUpScreenProps = NativeStackScreenProps<AuthStackProps, 'SignUp'>

export default function SignUpScreen({ navigation }: SignUpScreenProps) {

    const viewModel = useViewModel({ navigation })

    const isChecked = viewModel.isChecked

    const setChecked = viewModel.setChecked
    const setEmail = viewModel.setEmail
    const setPassword = viewModel.setPassword
    const handleLogin = viewModel.handleLogin

    const navigateTo = navigation.navigate

    return(
        <Content>
            <Text style={styles.titleText}>
                {'¡Bienvenido! 👋'}
            </Text>
            <View style={{ alignItems: 'flex-start', flex: 1, paddingHorizontal: '5%', width: '100%' }}>
                <FormBox placeholder={'Nombre'} title={'Nombre'} />
                <FormBox placeholder={'Apellidos'} title={'Apellidos'} />
                <FormBox autoCapitalize={'none'} placeholder={'ejemplo@gmail.com'} title={'Email'} onChangeText={setEmail}/>
                <FormBox autoCapitalize={'none'} placeholder={'mínimo 6 carácteres'} secureText={true} title={'Contraseña'} onChangeText={setPassword}/>
                <View style={styles.termsContainer}>
                    <CheckBox color={'#000000'} style={styles.checkbox} value={isChecked} onValueChange={setChecked}/>
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
                    <TouchableOpacity onPress={() => navigateTo('SignIn')}>
                        <Text style={[styles.signInText, { fontFamily: 'Montserrat-Regular' }]}>
                            {'¿Ya tienes cuenta? '}
                            <Text style={[styles.signInText, { fontFamily: 'Montserrat-SemiBold' }]}>{'Iniciar Sesión'}</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Content>
    )
}

const styles = StyleSheet.create({
    checkbox: {
        borderRadius: 10,
        height: 20,
        width: 20
    },
    continue: {
        alignItems: 'center',
        backgroundColor: '#4147d5',
        borderRadius: 100,
        paddingVertical: 16,
        width: '100%'
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