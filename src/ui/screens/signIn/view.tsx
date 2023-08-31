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

type SignInScreenProps = NativeStackScreenProps<AuthStackProps, 'SignIn'>

export default function SignInScreen({ navigation }: SignInScreenProps) {

    const viewModel = useViewModel({ navigation })

    const isChecked = viewModel.isChecked

    const setChecked = viewModel.setChecked
    const setEmail = viewModel.setEmail
    const setPassword = viewModel.setPassword
    const handleLogin = viewModel.handleLogin

    const goBack = navigation.goBack

    return(
        <Content>
            <Text style={styles.titleText}>
                {'¡Te echábamos de menos!'}
            </Text>
            <View style={{ alignItems: 'flex-start', flex: 1, paddingHorizontal: '5%', width: '100%' }}>
                <FormBox autoCapitalize={'none'} placeholder={'ejemplo@gmail.com'} title={'Email'} onChangeText={setEmail}/>
                <FormBox autoCapitalize={'none'} placeholder={'mínimo 6 carácteres'} secureText={true} title={'Contraseña'} onChangeText={setPassword}/>
                <View style={styles.termsContainer}>
                    <CheckBox color={'#000000'} style={styles.checkbox} value={isChecked} onValueChange={setChecked}/>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                        <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 12, marginLeft: '2%' }}>
                            {'Recuérdame'}
                        </Text>
                        <TouchableOpacity>
                            <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 12, marginRight: '4%' }}>
                                {'¿Has olvidado la contraseña?'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.continue} onPress={() => handleLogin()}>
                    <Text style={styles.singInText}>{'Iniciar Sesión'}</Text>
                </TouchableOpacity>
                <View style={styles.signUpContainer}>
                    <TouchableOpacity onPress={() => goBack()}>
                        <Text style={[styles.signUpText, { fontFamily: 'Montserrat-Regular' }]}>
                            {'¿No tienes cuenta? '}
                            <Text style={[styles.signUpText, { fontFamily: 'Montserrat-SemiBold' }]}>{'Crear cuenta'}</Text>
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
    signUpContainer: {
        alignItems: 'center',
        marginTop: '5%',
        width: '100%'
    },
    signUpText: {
        color: '#00000085',
        fontSize: 12
    },
    singInText: {
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